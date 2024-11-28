import React, { useState } from "react";

function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
    consent: false,
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Form submission logic here
    console.log("Form submitted:", formData);
  };

  return (
    <div id="contact" className="min-h-screen bg-gray-900 text-gray-200 flex items-center justify-center p-6">
      <div className="max-w-6xl w-full grid grid-cols-1 md:grid-cols-2 gap-12">
        {/* Form Section */}
        <div className="bg-gray-800 p-8 rounded-lg shadow-lg space-y-6">
          <h2 className="text-lg font-semibold text-orange-400">GET IN TOUCH</h2>
          <h1 className="text-3xl font-bold">We're here to serve you!</h1>
          
          <form onSubmit={handleSubmit} className="space-y-4">
            {/* Name */}
            <div>
              <label className="block text-sm font-medium" htmlFor="name">Name *</label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                className="mt-1 block w-full px-4 py-2 bg-gray-700 text-white rounded focus:outline-none focus:ring-2 focus:ring-orange-400"
              />
            </div>

            {/* Email */}
            <div>
              <label className="block text-sm font-medium" htmlFor="email">Email address *</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="mt-1 block w-full px-4 py-2 bg-gray-700 text-white rounded focus:outline-none focus:ring-2 focus:ring-orange-400"
              />
            </div>

            {/* Phone */}
            <div>
              <label className="block text-sm font-medium" htmlFor="phone">Phone number *</label>
              <input
                type="tel"
                id="phone"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                required
                className="mt-1 block w-full px-4 py-2 bg-gray-700 text-white rounded focus:outline-none focus:ring-2 focus:ring-orange-400"
              />
            </div>

            {/* Message */}
            <div>
              <label className="block text-sm font-medium" htmlFor="message">Message</label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                className="mt-1 block w-full px-4 py-2 bg-gray-700 text-white rounded focus:outline-none focus:ring-2 focus:ring-orange-400"
                rows="4"
              ></textarea>
            </div>

            {/* Consent */}
            <div className="flex items-start">
              <input
                type="checkbox"
                id="consent"
                name="consent"
                checked={formData.consent}
                onChange={handleChange}
                className="h-4 w-4 text-orange-400 focus:ring-orange-400 border-gray-700 rounded"
              />
              <label htmlFor="consent" className="ml-2 text-sm text-gray-300">
                I allow this website to store my submission so they can respond to my inquiry. *
              </label>
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              className="w-full py-3 text-lg font-semibold text-white bg-orange-500 rounded hover:bg-orange-600 focus:outline-none focus:ring-2 focus:ring-orange-400"
            >
              SUBMIT
            </button>
          </form>
        </div>

        {/* Contact Info & Hours */}
        <div className="space-y-8">
          {/* Google Map Embed */}
          <div className="overflow-hidden rounded-lg">
            <iframe
              title="Google Map Location"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3650.029511357358!2d-122.08385158502338!3d37.422065979826335!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x808fb24cae18fdb7%3A0x25cbe2e317e12b72!2sGoogleplex!5e0!3m2!1sen!2sus!4v1608584461554!5m2!1sen!2sus"
              width="100%"
              height="250"
              className="border-0 w-full h-64"
              allowFullScreen=""
              loading="lazy"
            ></iframe>
          </div>

          {/* Contact Info */}
          <div className="bg-gray-800 p-8 rounded-lg shadow-lg space-y-4">
            <div>
              <h2 className="text-lg font-semibold text-orange-400">Get in touch</h2>
              <p className="text-sm">
                <a href="mailto:abhay741mishra@gmail.com" className="hover:underline">abhay741mishra@gmail.com</a>
              </p>
            </div>

            {/* Location */}
            <div>
              <h3 className="text-lg font-semibold text-orange-400">Location</h3>
              <p className="text-sm">Kanpur, UP IN</p>
            </div>

            {/* Hours */}
            <div>
              <h3 className="text-lg font-semibold text-orange-400">Hours</h3>
              <ul className="text-sm space-y-1">
                <li>Monday: 9:00am - 10:00pm</li>
                <li>Tuesday: 9:00am - 10:00pm</li>
                <li>Wednesday: 9:00am - 10:00pm</li>
                <li>Thursday: 9:00am - 10:00pm</li>
                <li>Friday: 9:00am - 10:00pm</li>
                <li>Saturday: 9:00am - 6:00pm</li>
                <li>Sunday: 9:00am - 12:00pm</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ContactForm;
