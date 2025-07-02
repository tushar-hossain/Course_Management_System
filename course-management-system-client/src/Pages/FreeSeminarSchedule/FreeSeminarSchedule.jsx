import React, { useState } from "react";
import { motion } from "framer-motion";
import { toast } from "react-toastify";

const FreeSeminarSchedule = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    toast.success("Thank you for registering!");
    setFormData({ name: "", email: "", phone: "" });
  };

  return (
    <section className="bg-linear-to-r from-[#5c2ede] shadow-[-10px_-10px_30px_4px_rgba(0,0,0,0.1),_10px_10px_30px_4px_rgba(45,78,255,0.15)] text-white py-12 px-4 rounded-lg max-w-4xl mx-auto my-10 border hover:shadow-[0_20px_50px_rgba(8,_112,_184,_0.7)]">
      <motion.div
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-6">
          🎓 Free Seminar on Web Development Career
        </h2>
        <p className="text-center mb-6">
          Join us for an insightful seminar on how to become a successful web
          developer. Learn from experts and plan your roadmap.
        </p>
      </motion.div>

      <motion.div
        className="bg-[#6f42ed77] border border-green-200 p-6 rounded mb-8"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.2 }}
      >
        <h3 className="text-xl font-semibold mb-2">📅 Schedule</h3>
        <ul className="space-y-1">
          <li>
            <strong>Date:</strong> Friday, July 12, 2025
          </li>
          <li>
            <strong>Time:</strong> 7:00 PM – 9:00 PM
          </li>
          <li>
            <strong>Location:</strong> BD Programming HQ (Online via Zoom)
          </li>
        </ul>
      </motion.div>

      <motion.form
        onSubmit={handleSubmit}
        className="space-y-4"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.4 }}
      >
        <div>
          <label className="block font-medium mb-1">Name</label>
          <input
            type="text"
            name="name"
            required
            value={formData.name}
            onChange={handleChange}
            className="w-full p-3 rounded-md border border-gray-300 focus:outline-none focus:ring focus:ring-gray-100"
            placeholder="Your full name"
          />
        </div>

        <div>
          <label className="block font-medium mb-1">Email</label>
          <input
            type="email"
            name="email"
            required
            value={formData.email}
            onChange={handleChange}
            className="w-full p-3 rounded-md border border-gray-300 focus:outline-none focus:ring focus:ring-gray-100"
            placeholder="Your email address"
          />
        </div>

        <div>
          <label className="block font-medium mb-1">Phone</label>
          <input
            type="tel"
            name="phone"
            required
            value={formData.phone}
            onChange={handleChange}
            className="w-full p-3 rounded-md border border-gray-300 focus:outline-none focus:ring focus:ring-gray-100"
            placeholder="Your phone number"
          />
        </div>

        <button
          type="submit"
          className="w-full bg-[#5c2ede] hover:shadow-[0_20px_50px_rgba(8,_112,_184,_0.7)] cursor-pointer border text-white font-semibold py-3 rounded-md transition"
        >
          Register for Free Seminar
        </button>
      </motion.form>
    </section>
  );
};

export default FreeSeminarSchedule;
