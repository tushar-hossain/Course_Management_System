import feature1 from "../../assets/images/features1.webp";
import feature2 from "../../assets/images/features2.webp";
import feature3 from "../../assets/images/features3.webp";
import feature4 from "../../assets/images/features4.webp";

export default function MonthsCourse() {
  return (
    <div className="bg-secondary">
      <div className="w-11/12 mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 py-8">
          {/* short accredited */}
          <div className="flex gap-4 hover:transform hover:-translate-2 ease-in-out duration-1000 ">
            <div className="bg-white h-fit p-2 rounded-full">
              <img
                src={feature1}
                alt="short accredited"
                className="object-cover object-center"
              />
            </div>
            <div className="space-y-3">
              <h1 className="text-xl font-semibold text-white">
                Short & Accredited
              </h1>
              <p className="text-gray-50">
                Ranging from 1 -14 Days or up to 12 Months. Courses length 30m.
              </p>
            </div>
          </div>
          {/* Classroom */}
          <div className="flex gap-4 hover:transform hover:-translate-2 ease-in-out duration-1000">
            <div className="bg-white h-fit p-2 rounded-full">
              <img
                src={feature2}
                alt="Classroom"
                className="object-cover object-center"
              />
            </div>
            <div className="space-y-3">
              <h1 className="text-xl font-semibold text-white">Classroom</h1>
              <p className="text-gray-50">
                Nationwide Locations running monthly whether Face2face.
              </p>
            </div>
          </div>
          {/* Company’s Courses */}
          <div className="flex gap-4 hover:transform hover:-translate-2 ease-in-out duration-1000">
            <div className="bg-white h-fit p-2 rounded-full">
              <img
                src={feature3}
                alt=" Company’s Courses"
                className="object-cover object-center"
              />
            </div>
            <div className="space-y-3">
              <h1 className="text-xl font-semibold text-white">
                Company’s Courses
              </h1>
              <p className="text-gray-50">
                Design and Tailor courses for your team and deliver at a
                location.
              </p>
            </div>
          </div>
          {/* Online Training */}
          <div className="flex gap-4 hover:transform hover:-translate-2 ease-in-out duration-1000">
            <div className="bg-white h-fit p-2 rounded-full">
              <img
                src={feature4}
                alt="Online Training"
                className="object-cover object-center"
              />
            </div>
            <div className="space-y-3">
              <h1 className="text-xl font-semibold text-white">
                Online Training
              </h1>
              <p className="text-gray-50">
                Self-paced, Study from anywhere E-learning Video courses.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
