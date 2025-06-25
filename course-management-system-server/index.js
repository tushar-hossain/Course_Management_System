require("dotenv").config();
const express = require("express");
const cors = require("cors");
const admin = require("firebase-admin");
const { MongoClient, ServerApiVersion, ObjectId } = require("mongodb");

const app = express();
const port = process.env.PORT || 3000;

const decode = Buffer.from(process.env.FB_SERVICES_KEY, "base64").toString(
  "utf8"
);

const serviceAccount = JSON.parse(decode);
// const serviceAccount = require("./firebase-token.json");

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
});

// middleware
app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.status(200).send("<h1>Welcome to DB Programming Server.</h1>");
});

// firebase token verify
const firebaseToken = async (req, res, next) => {
  const authHeaders = req.headers?.authorization;
  if (!authHeaders || !authHeaders.startsWith("Bearer ")) {
    return res.status(401).send({ message: "unauthorized access." });
  }
  const token = authHeaders.split(" ")[1];

  try {
    const decoded = await admin.auth().verifyIdToken(token);
    req.decoded = decoded;
    next();
  } catch (error) {
    res.status(401).send({ message: "unauthorized access." });
  }
};

const verifyTokenEmail = (req, res, next) => {
  if (req.query.email !== req.decoded.email) {
    res.status(403).send({ message: "forbidden access." });
  }
  next();
};

// Create a MongoClient with a MongoClientOptions object to set the Stable API version
const client = new MongoClient(process.env.DB_URI, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  },
});

async function run() {
  try {
    // Connect the client to the server	(optional starting in v4.7)
    // await client.connect();

    // db collection
    const courseCollection = client.db("bdProgramming").collection("courses");

    const enrollmentsCollection = client
      .db("bdProgramming")
      .collection("enrollments");

    const instructorCollection = client
      .db("bdProgramming")
      .collection("instructor");

    // courses api
    app.get("/courses", async (req, res) => {
      const result = await courseCollection
        .find()
        .sort({ date: -1 })
        .limit(6)
        .toArray();
      res.status(200).send(result);
    });

    app.get("/all-courses", async (req, res) => {
      const result = await courseCollection.find().toArray();
      res.status(200).send(result);
    });

    app.get(
      "/courses/manage-courses",
      firebaseToken,
      verifyTokenEmail,
      async (req, res) => {
        const email = req.query.email;
        const result = await courseCollection.find({ email: email }).toArray();
        res.status(200).send(result);
      }
    );

    // single course get
    app.get("/courses/:id", async (req, res) => {
      const query = { _id: new ObjectId(req.params.id) };
      const result = await courseCollection.findOne(query);
      res.status(200).send(result);
    });

    // popular course get
    app.get("/popular-course", async (req, res) => {
      const result = await courseCollection
        .find()
        .sort({
          enrolled: -1,
        })
        .limit(6)
        .toArray();
      res.status(200).send(result);
    });

    app.post("/courses", async (req, res) => {
      const doc = req.body;
      const result = await courseCollection.insertOne(doc);
      res.status(201).send(result);
    });

    app.put("/courses/:id", async (req, res) => {
      const filter = { _id: new ObjectId(req.params.id) };
      const updatedDoc = {
        $set: req.body,
      };

      const result = await courseCollection.updateOne(filter, updatedDoc);
      res.send(result);
    });

    app.patch("/courses/:id", async (req, res) => {
      const filter = { _id: new ObjectId(req.params.id) };
      const result = await courseCollection.updateOne(filter, {
        $inc: {
          enrolled: 1,
          seats: -1,
        },
      });
      res.send(result);
    });

    app.delete("/courses/:id", async (req, res) => {
      const query = { _id: new ObjectId(req.params.id) };
      const result = await courseCollection.deleteOne(query);
      res.status(200).send(result);
    });

    //enrolled api
    app.get("/enrollments", async (req, res) => {
      const email = req.query.email;
      const query = {};
      if (email) {
        query.email = email;
      }
      const existing = await enrollmentsCollection.find(query).toArray();
      for (const course of existing) {
        const courseId = course.courseId;
        const courseQuery = { _id: new ObjectId(courseId) };
        const coursesEnrollMents = await courseCollection.findOne(courseQuery);
        course.title = coursesEnrollMents.title;
        course.image = coursesEnrollMents.image;
        course.level = coursesEnrollMents.level;
        course.instructor = coursesEnrollMents.instructor;
        course.duration = coursesEnrollMents.duration;
        course.name = coursesEnrollMents.name;
      }

      res.status(200).send(existing);
    });

    app.get("/enrollments/:id", async (req, res) => {
      const query = { courseId: req.params.id };
      const result = await enrollmentsCollection.findOne(query);
      res.status(200).send(result);
    });

    app.post("/enrollments", async (req, res) => {
      const query = req.body;

      const alreadyExists = await enrollmentsCollection.findOne(query);
      if (alreadyExists) {
        return res.status(400).send({ message: "Already enrolled" });
      }

      const courseEnrolled = await enrollmentsCollection
        .find({
          email: query.email,
        })
        .toArray();
      if (courseEnrolled.length >= 3) {
        return res.status(400).send({ message: "Limit reached" });
      }

      const result = await enrollmentsCollection.insertOne(query);
      res.status(200).send(result);
    });

    app.delete("/cancel/:id", async (req, res) => {
      const filter = {
        courseId: req.params.id,
      };
      const result = await enrollmentsCollection.deleteOne(filter);
      res.status(200).send(result);
    });

    app.delete("/enrollments/:id", async (req, res) => {
      const query = { _id: new ObjectId(req.params.id) };
      const result = await enrollmentsCollection.deleteOne(query);
      res.status(200).send(result);
    });

    // Instructor api
    app.get("/instructor", async (req, res) => {
      const result = await instructorCollection.find().toArray();
      res.status(200).send(result);
    });

    // Send a ping to confirm a successful connection
    // await client.db("admin").command({ ping: 1 });
    // console.log(
    //   "Pinged your deployment. You successfully connected to MongoDB!"
    // );
  } finally {
  }
}

run().catch(console.dir);

app.listen(port, () => {
  console.log(`server running at ${port}`);
});
