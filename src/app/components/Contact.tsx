'use client'
import React, { useState } from 'react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
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
    <section id="contact" className="py-24 text-white bg-gradient-to-b from-[#3C3C7B] to-[#4E4E8E]">
      <div className="container mx-auto px-8 text-center">
        {/* Section Title */}
        <h2 className="section-title">CONTACT WITH ME</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* Contact Form (Left Side) */}
          <div className="bg-[#121230] p-8 rounded-lg shadow-lg border border-[#1E1E4A]">
            <p className="text-gray-300 mb-6">
              If you have any questions or concerns, please dont hesitate to contact me.
              I am open to any work opportunities that align with my skills and interests.
            </p>

            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Name Input */}
              <div>
                <label className="block text-left text-lg mb-1">Your Name:</label>
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
                <label className="block  text-left text-lg mb-1">Your Email:</label>
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
                <label className="block text-lg mb-1 text-left">Your Message:</label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={4}
                  className="w-full p-3 bg-[#0A0A0A] border border-gray-700 rounded-lg focus:ring-2 focus:ring-green-400 outline-none"
                ></textarea>
              </div>

              {/* Submit Button */}
              <div className='flex justify-center'>
              <button
                type="submit"
                className="w-50% bg-gradient-to-r from-purple-600 to-pink-500 text-white py-3 px-10 rounded-lg text-lg font-semibold flex justify-center items-center gap-2 hover:scale-105 transition-transform duration-300"
              >
                SEND MESSAGE <span>📩</span>
              </button>
              </div>
  
            </form>
          </div>

          {/* Contact Details (Right Side) */}
          <div className="space-y-6">
            {/* Email */}
            <div className="flex items-center space-x-4">
              <div className="bg-gray-700 p-3 rounded-full">
                <span>📧</span>
              </div>
              <p className="text-lg text-gray-300">sharansrn007@gmail.com</p>
            </div>

            {/* Phone */}
            <div className="flex items-center space-x-4">
              <div className="bg-gray-700 p-3 rounded-full">
                <span>📞</span>
              </div>
              <p className="text-lg text-gray-300">+971 50 9804082</p>
            </div>

            {/* Location */}
            <div className="flex items-center space-x-4">
              <div className="bg-gray-700 p-3 rounded-full">
                <span>📍</span>
              </div>
              <p className="text-lg text-gray-300">Ras Al Khor, Dubai, UAE</p>
            </div>

            {/* Social Icons */}
            <div className="flex space-x-4 mt-6">
              <div className="bg-gray-700 p-3 rounded-full hover:bg-gray-600 transition">
                <span>👤</span>
              </div>
              <div className="bg-gray-700 p-3 rounded-full hover:bg-gray-600 transition">
                <span>🔗</span>
              </div>
              <div className="bg-gray-700 p-3 rounded-full hover:bg-gray-600 transition">
                <span>𝕏</span>
              </div>
              <div className="bg-gray-700 p-3 rounded-full hover:bg-gray-600 transition">
                <span>📚</span>
              </div>
              <div className="bg-gray-700 p-3 rounded-full hover:bg-gray-600 transition">
                <span>📘</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
