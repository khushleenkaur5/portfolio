// src/components/Contact.js

import React, { useState } from "react";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add form submission logic here
    alert("Form Submitted");
  };

  return (
    <section id="contact" className="text-gray-400 bg-gray-900 body-font relative">
      <div className="container px-5 py-10 mx-auto">
        <div className="text-center mb-20">
          <h1 className="sm:text-4xl text-3xl font-medium title-font text-white mb-4">
            Contact Me
          </h1>
          <p className="lg:w-2/3 mx-auto leading-relaxed text-base">
            I’d love to hear from you. Whether you’re interested in a project or just
            want to chat, feel free to reach out.
          </p>
        </div>
        <div className="lg:w-1/2 md:w-2/3 mx-auto">
          <form onSubmit={handleSubmit}>
            <div className="flex flex-wrap -m-2">
              <div className="p-2 w-full">
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full bg-gray-800 rounded border border-gray-700 focus:ring-2 focus:ring-green-500 text-base outline-none text-gray-400 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                  placeholder="Your Name"
                  required
                />
              </div>
              <div className="p-2 w-full">
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full bg-gray-800 rounded border border-gray-700 focus:ring-2 focus:ring-green-500 text-base outline-none text-gray-400 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                  placeholder="Your Email"
                  required
                />
              </div>
              <div className="p-2 w-full">
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full bg-gray-800 rounded border border-gray-700 focus:ring-2 focus:ring-green-500 text-base outline-none text-gray-400 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                  placeholder="Your Message"
                  rows="5"
                  required
                ></textarea>
              </div>
              <div className="p-2 w-full">
                <button
                  type="submit"
                  className="flex mx-auto text-white bg-green-500 border-0 py-2 px-6 focus:outline-none hover:bg-green-600 rounded text-lg">
                  Send Message
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}
