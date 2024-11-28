import React, { useState } from "react";
import HB from "../assets/HB.jpg";

function ReservationForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    date: "",
    time: "",
    guests: 1,
    requests: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Reservation data:", formData);
    alert("Reservation submitted!");
  };

  return (
    <div
      id="reservation"
      className="relative min-h-screen flex items-center justify-center bg-gray"
      style={{
        backgroundImage: `url(${HB})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundBlendMode: "darken",
      }}
    >
      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-transparent"></div>

      {/* Form Container */}
      <div className="relative w-full max-w-lg lg:max-w-3xl p-4 lg:p-8 space-y-6 bg-gray-800 bg-opacity-90 rounded-lg shadow-lg mx-2 lg:mx-4">
        <h2 className="text-3xl lg:text-4xl font-bold text-center text-white">Make a Reservation</h2>

        <form onSubmit={handleSubmit} className="space-y-4 grid grid-cols-1 sm:grid-cols-2 gap-4">
          {/* Name */}
          <div>
            <label className="block text-sm font-medium text-gray-200" htmlFor="name">
              Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              className="mt-1 w-full px-4 py-2 bg-gray-700 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
            />
          </div>

          {/* Email */}
          <div>
            <label className="block text-sm font-medium text-gray-200" htmlFor="email">
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              className="mt-1 w-full px-4 py-2 bg-gray-700 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
            />
          </div>

          {/* Phone */}
          <div>
            <label className="block text-sm font-medium text-gray-200" htmlFor="phone">
              Phone
            </label>
            <input
              type="tel"
              id="phone"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              required
              className="mt-1 w-full px-4 py-2 bg-gray-700 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
            />
          </div>

          {/* Date */}
          <div>
            <label className="block text-sm font-medium text-gray-200" htmlFor="date">
              Date
            </label>
            <input
              type="date"
              id="date"
              name="date"
              value={formData.date}
              onChange={handleChange}
              required
              className="mt-1 w-full px-4 py-2 bg-gray-700 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
            />
          </div>

          {/* Time */}
          <div>
            <label className="block text-sm font-medium text-gray-200" htmlFor="time">
              Time
            </label>
            <input
              type="time"
              id="time"
              name="time"
              value={formData.time}
              onChange={handleChange}
              required
              className="mt-1 w-full px-4 py-2 bg-gray-700 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
            />
          </div>

          {/* Guests */}
          <div>
            <label className="block text-sm font-medium text-gray-200" htmlFor="guests">
              Number of Guests
            </label>
            <input
              type="number"
              id="guests"
              name="guests"
              min="1"
              max="20"
              value={formData.guests}
              onChange={handleChange}
              required
              className="mt-1 w-full px-4 py-2 bg-gray-700 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
            />
          </div>

          {/* Special Requests */}
          <div className="col-span-1 sm:col-span-2">
            <label className="block text-sm font-medium text-gray-200" htmlFor="requests">
              Special Requests
            </label>
            <textarea
              id="requests"
              name="requests"
              value={formData.requests}
              onChange={handleChange}
              className="mt-1 w-full px-4 py-2 bg-gray-700 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
              rows="3"
              placeholder="Any special requests?"
            ></textarea>
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="col-span-1 sm:col-span-2 w-full py-3 text-lg font-semibold text-white bg-orange-500 rounded-lg hover:bg-orange-600 focus:outline-none focus:ring-2 focus:ring-orange-500"
          >
            Reserve Now
          </button>
        </form>
      </div>
    </div>
  );
}

export default ReservationForm;
