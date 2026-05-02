import React, { useState } from "react";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [status, setStatus] = useState("");

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // yaha backend API hota to call karte, abhi demo response
    setStatus("Thank you! Your message has been sent successfully.");
    setFormData({ name: "", email: "", message: "" });
  };

  return (
    <section className="py-16 px-6 max-w-[1200px] mx-auto -mb-10">
      <h2 className="text-4xl font-bold text-center mb-5 text-teal-600">
        Contact Us
      </h2>
      <p className="text-center text-gray-600 mb-10">
        Have any questions? Feel free to reach out to us.
      </p>

      <form
        onSubmit={handleSubmit}
        className="max-w-[600px] mx-auto space-y-5 bg-white shadow-md rounded-xl p-8"
      >
        <input
          type="text"
          name="name"
          placeholder="Your Name"
          className="w-full border p-3 rounded outline-none focus:border-teal-500"
          value={formData.name}
          onChange={handleChange}
          required
        />

        <input
          type="email"
          name="email"
          placeholder="Your Email"
          className="w-full border p-3 rounded outline-none focus:border-teal-500"
          value={formData.email}
          onChange={handleChange}
          required
        />

        <textarea
          name="message"
          placeholder="Your Message"
          rows="5"
          className="w-full border p-3 rounded outline-none focus:border-teal-500"
          value={formData.message}
          onChange={handleChange}
          required
        ></textarea>

        <button
          type="submit"
          className="w-full bg-teal-600 text-white px-6 py-3 rounded font-semibold hover:bg-teal-700 transition"
        >
          Send Message
        </button>
      </form>

      {/* Response Message */}
      {status && (
        <p className="text-center text-green-600 mt-4 font-medium">{status}</p>
      )}
    </section>
  );
};

export default Contact;
