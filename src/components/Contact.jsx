import React, { useState } from "react";

function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // You can integrate an email sending service like EmailJS or handle this with a backend API.
    console.log("Form submitted:", formData);
    alert("Your message has been sent!");
    setFormData({
      name: "",
      email: "",
      message: "",
    });
  };

  return (
    <div className="p-4 bg-darkerBrown text-white min-h-screen flex  items-center">
      {/* <h2 className="text-2xl font-bold text-orange-dark text-center mb-6 uppercase">
        Contact Us
      </h2> */}
      <form
        onSubmit={handleSubmit}
        className="w-full max-w-lg bg-darkBrown p-6 rounded-lg shadow-md"
      >
        <div className="mb-4">
          <label className="block text-sm font-bold mb-2" htmlFor="name">
            Name
          </label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            className="w-full px-3 py-2 bg-white text-black rounded-md focus:outline-none focus:ring-2 focus:ring-orange-dark"
            required
          />
        </div>
        <div className="mb-4">
          <label className="block text-sm font-bold mb-2" htmlFor="email">
            Email
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className="w-full px-3 py-2 bg-white text-black rounded-md focus:outline-none focus:ring-2 focus:ring-orange-dark"
            required
          />
        </div>
        <div className="mb-6">
          <label className="block text-sm font-bold mb-2" htmlFor="message">
            Message
          </label>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            className="w-full px-3 py-2 bg-white text-black rounded-md h-32 focus:outline-none focus:ring-2 focus:ring-orange-dark"
            required
          ></textarea>
        </div>
        <div className="flex justify-center">
          <button
            type="submit"
            className="bg-orange-dark text-white py-2 px-4 rounded-md hover:bg-orange transition duration-300"
          >
            Send Message
          </button>
        </div>
      </form>
      <div className="mt-8 text-center">
        <h3 className="text-xl font-bold mb-2">Our Address</h3>
        <p>Roasters Coffee</p>
        <p>123 Coffee Street</p>
        <p>Toronto, ON M5V 2T6</p>
        <p>Canada</p>
      </div>
    </div>
  );
}

export default Contact;
