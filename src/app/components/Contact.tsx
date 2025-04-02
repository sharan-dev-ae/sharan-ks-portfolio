"use client";
import React, { useState } from "react";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission logic here, such as sending data to an API
    console.log(formData);
  };

  return (
    <section
      id="contact"
      className="py-24" // Reduced padding
    >
      <div className="container container-bg mx-auto px-8 text-center">
        {/* Section Title */}
        <h2 className="section-title mb-8">CONTACT WITH ME</h2>{" "}
        {/* Reduced bottom margin */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          {/* Contact Form (Left Side) */}
          <div className="bg-[#121230] p-6 rounded-lg shadow-lg border border-[#1E1E4A]">
            {" "}
            {/* Reduced padding */}
            <p className="text-gray-300 mb-4">
              If you have any questions or concerns, please dont hesitate to
              contact me. I am open to any work opportunities that align with my
              skills and interests.
            </p>
            <form onSubmit={handleSubmit} className="space-y-4">
              {" "}
              {/* Reduced space */}
              {/* Name Input */}
              <div>
                <label className="block text-left text-lg mb-1">
                  Your Name:
                </label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full p-3 bg-[#0A0A0A] border border-gray-700 rounded-lg focus:ring-2 focus:ring-green-400 outline-none"
                />
              </div>
              {/* Email Input */}
              <div>
                <label className="block text-left text-lg mb-1">
                  Your Email:
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full p-3 bg-[#0A0A0A] border border-gray-700 rounded-lg focus:ring-2 focus:ring-green-400 outline-none"
                />
              </div>
              {/* Message Input */}
              <div>
                <label className="block text-lg mb-1 text-left">
                  Your Message:
                </label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={3} // Reduced row height
                  className="w-full p-3 bg-[#0A0A0A] border border-gray-700 rounded-lg focus:ring-2 focus:ring-green-400 outline-none"
                ></textarea>
              </div>
              {/* Submit Button */}
              <div className="flex justify-center">
                <button
                  type="submit"
                  className="w-50% bg-gradient-to-r from-purple-600 to-pink-500 text-white py-3 px-10 rounded-lg text-lg font-semibold flex justify-center items-center gap-2 hover:scale-105 transition-transform duration-300"
                >
                  SEND MESSAGE <span>📩</span>
                </button>
              </div>
            </form>
          </div>

          <div className="space-y-4">
  {/* Indian Contact Section */}
  <div className="bg-[#121230] p-4 rounded-lg shadow-lg border border-[#1E1E4A]">
    <h3 className="text-2xl text-[#FFBC1C] mb-3">Contact (India)</h3>

    <div className="flex items-center space-x-4 mb-3">
      <div className="bg-gray-700 p-2 rounded-full">
        <span>📞</span>
      </div>
      <p className="text-lg text-gray-300">+91 7591997828</p>
    </div>

    <div className="flex items-center space-x-4 mb-3">
      <div className="bg-gray-700 p-2 rounded-full">
        <span>📍</span>
      </div>
      <p className="text-lg text-gray-300">Kozhikode, Kerala, India</p>
    </div>
  </div>

  {/* UAE Contact Section */}
  <div className="bg-[#121230] p-4 rounded-lg shadow-lg border border-[#1E1E4A]">
    <h3 className="text-2xl text-[#FFBC1C] mb-3">Contact (UAE)</h3>

    <div className="flex items-center space-x-4 mb-3">
      <div className="bg-gray-700 p-2 rounded-full">
        <span>📞</span>
      </div>
      <p className="text-lg text-gray-300">+971 50 9804082</p>
    </div>

    <div className="flex items-center space-x-4 mb-3">
      <div className="bg-gray-700 p-2 rounded-full">
        <span>📍</span>
      </div>
      <p className="text-lg text-gray-300">Ras Al Khor, Dubai, UAE</p>
    </div>
  </div>

  {/* Common Email Section */}
  <div className="bg-[#121230] p-4 rounded-lg shadow-lg border border-[#1E1E4A]">
    <h3 className="text-2xl text-[#FFBC1C] mb-3">Email</h3>
    <div className="flex items-center space-x-4 mb-3">
      <div className="bg-gray-700 p-2 rounded-full">
        <span>📧</span>
      </div>
      <p className="text-lg text-gray-300">sharansrn007@gmail.com</p>
    </div>
  </div>
</div>

        </div>
      </div>
    </section>
  );
};

export default Contact;
