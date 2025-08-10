import Swal from "sweetalert2";

export default function Contact() {
  const handelSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const email = form.email.value;
    const message = form.message.value;
    Swal.fire({
      position: "top-end",
      icon: "success",
      title: "Your work has been saved",
      showConfirmButton: false,
      timer: 1500,
    });

    form.reset();
  };

  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center py-10 px-4">
      <div className="max-w-4xl w-full bg-white shadow-lg rounded-lg p-8">
        <h1 className="text-3xl font-bold text-center mb-6 text-gray-800">
          Contact Us
        </h1>
        <p className="text-center text-gray-600 mb-10">
          Have a question or need help? Fill out the form below and we’ll get
          back to you shortly.
        </p>

        <div className="grid md:grid-cols-2 gap-8">
          {/* Contact Info */}
          <div>
            <h2 className="text-xl font-semibold text-gray-800 mb-4">
              Our Office
            </h2>
            <p className="text-gray-600 mb-2">123 Main Street</p>
            <p className="text-gray-600 mb-2">Dhaka, Bangladesh</p>
            <p className="text-gray-600 mb-2">Phone: +880 123 456 789</p>
            <p className="text-gray-600 mb-6">Email: info@example.com</p>

            <iframe
              title="Map"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3650.301592355316!2d90.4125183154547!3d23.810331484558742!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755c7ab8c1dd0b7%3A0xc4a5292a938323f5!2sDhaka!5e0!3m2!1sen!2sbd!4v1675170986386!5m2!1sen!2sbd"
              width="100%"
              height="200"
              allowFullScreen=""
              loading="lazy"
              className="rounded-lg shadow-sm"
            ></iframe>
          </div>

          {/* Contact Form */}
          <div>
            <form onSubmit={handelSubmit} className="space-y-5">
              <div>
                <label className="block text-gray-700 mb-1">Name</label>
                <input
                  type="text"
                  name="name"
                  placeholder="Your Name"
                  className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 text-black"
                />
              </div>
              <div>
                <label className="block text-gray-700 mb-1">Email</label>
                <input
                  type="email"
                  name="email"
                  placeholder="Your Email"
                  className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500  text-black"
                />
              </div>
              <div>
                <label className="block text-gray-700 mb-1">Message</label>
                <textarea
                  placeholder="Your Message"
                  name="message"
                  rows="4"
                  className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500  text-black"
                ></textarea>
              </div>
              <button
                type="submit"
                className="w-full bg-green-600 text-white py-2 px-4 rounded-lg hover:bg-green-700 transition"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
