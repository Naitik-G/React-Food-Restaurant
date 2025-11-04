// src/components/ReservationForm.jsx

import React, { useState } from "react";
import { sendReservationEmail } from "../services/emailService";
import { getConfirmationMessage } from "../utils/emailTemplate";

function ReservationForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    date: "",
    time: "",
    guests: 2,
    requests: "",
  });

  const [focusedField, setFocusedField] = useState(null);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    console.log("=== FORM SUBMISSION STARTED ===");
    console.log("Form Data:", formData);

    // Validate form
    if (
      !formData.name ||
      !formData.email ||
      !formData.phone ||
      !formData.date ||
      !formData.time
    ) {
      alert("Please fill in all required fields!");
      return;
    }

    setIsSubmitting(true);

    try {
      console.log("Calling sendReservationEmail...");

      // Send email using the service
      const result = await sendReservationEmail(formData);

      console.log("Email service result:", result);
      console.log("Reservation data:", formData);

      // Show success message
      alert(getConfirmationMessage(formData));

      // Reset form
      setFormData({
        name: "",
        email: "",
        phone: "",
        date: "",
        time: "",
        guests: 2,
        requests: "",
      });

      console.log("=== FORM SUBMISSION COMPLETED ===");
    } catch (error) {
      console.error("=== ERROR PROCESSING RESERVATION ===");
      console.error("Error:", error);
      console.error("Error message:", error.message);
      console.error("Error stack:", error.stack);
      alert(
        error.message ||
          "There was an error processing your reservation. Please try again or contact us directly."
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  const guestOptions = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

  return (
    <div
      id="reservation"
      className="relative min-h-screen flex items-center justify-center py-20 px-4 overflow-hidden"
    >
      {/* Animated Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-gray-800 to-black"></div>

      {/* Background Image with Overlay */}
      <div
        className="absolute inset-0 opacity-20"
        style={{
          backgroundImage: `url(https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?q=80&w=2070)`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      ></div>

      {/* Animated Gradient Orbs */}
      <div className="absolute top-20 left-10 w-96 h-96 bg-orange-500/20 rounded-full blur-3xl animate-float"></div>
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-amber-500/20 rounded-full blur-3xl animate-float-delayed"></div>

      {/* Main Container */}
      <div className="relative z-10 w-full max-w-6xl grid lg:grid-cols-2 gap-8 items-center">
        {/* Left Side - Info Section */}
        <div className="text-white space-y-8 px-4 lg:px-8">
          <div className="space-y-4">
            <div className="inline-flex items-center gap-2 bg-orange-500/10 backdrop-blur-sm border border-orange-500/20 rounded-full px-6 py-2">
              <span className="w-2 h-2 bg-orange-400 rounded-full animate-pulse"></span>
              <span className="text-orange-400 text-sm font-medium tracking-wider">
                RESERVE YOUR TABLE
              </span>
            </div>

            <h2 className="text-5xl lg:text-6xl font-bold leading-tight">
              <span className="bg-gradient-to-r from-white via-orange-100 to-amber-200 bg-clip-text text-transparent">
                Join Us for an
              </span>
              <br />
              <span className="text-white">Unforgettable Experience</span>
            </h2>

            <p className="text-gray-400 text-lg leading-relaxed">
              Reserve your table now and indulge in a culinary journey crafted
              by our award-winning chefs.
            </p>
          </div>

          {/* Features */}
          <div className="space-y-4">
            <div className="flex items-start gap-4 group">
              <div className="flex-shrink-0 w-12 h-12 bg-orange-500/10 rounded-xl flex items-center justify-center group-hover:bg-orange-500/20 transition-colors">
                <svg
                  className="w-6 h-6 text-orange-400"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                  />
                </svg>
              </div>
              <div>
                <h3 className="font-semibold text-lg mb-1">
                  Email Confirmation
                </h3>
                <p className="text-gray-400 text-sm">
                  Get instant confirmation email with all details
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4 group">
              <div className="flex-shrink-0 w-12 h-12 bg-orange-500/10 rounded-xl flex items-center justify-center group-hover:bg-orange-500/20 transition-colors">
                <svg
                  className="w-6 h-6 text-orange-400"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
                  />
                </svg>
              </div>
              <div>
                <h3 className="font-semibold text-lg mb-1">
                  Private Events Available
                </h3>
                <p className="text-gray-400 text-sm">
                  Perfect for special occasions and gatherings
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4 group">
              <div className="flex-shrink-0 w-12 h-12 bg-orange-500/10 rounded-xl flex items-center justify-center group-hover:bg-orange-500/20 transition-colors">
                <svg
                  className="w-6 h-6 text-orange-400"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
              </div>
              <div>
                <h3 className="font-semibold text-lg mb-1">
                  Flexible Cancellation
                </h3>
                <p className="text-gray-400 text-sm">
                  Free cancellation up to 24 hours before
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Right Side - Form */}
        <div className="relative">
          <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl p-8 shadow-2xl">
            <div className="space-y-6">
              {/* Name & Email Row */}
              <div className="grid sm:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <label className="block text-sm font-medium text-gray-300">
                    Full Name *
                  </label>
                  <div className="relative">
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      onFocus={() => setFocusedField("name")}
                      onBlur={() => setFocusedField(null)}
                      required
                      className="w-full px-4 py-3 bg-white/5 border border-white/10 text-white rounded-xl focus:outline-none focus:border-orange-500 focus:ring-2 focus:ring-orange-500/20 transition-all placeholder-gray-500"
                      placeholder="John Doe"
                    />
                    {focusedField === "name" && (
                      <div className="absolute -bottom-1 left-0 right-0 h-0.5 bg-gradient-to-r from-orange-500 to-amber-500 animate-expand"></div>
                    )}
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="block text-sm font-medium text-gray-300">
                    Email Address *
                  </label>
                  <div className="relative">
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      onFocus={() => setFocusedField("email")}
                      onBlur={() => setFocusedField(null)}
                      required
                      className="w-full px-4 py-3 bg-white/5 border border-white/10 text-white rounded-xl focus:outline-none focus:border-orange-500 focus:ring-2 focus:ring-orange-500/20 transition-all placeholder-gray-500"
                      placeholder="john@example.com"
                    />
                    {focusedField === "email" && (
                      <div className="absolute -bottom-1 left-0 right-0 h-0.5 bg-gradient-to-r from-orange-500 to-amber-500 animate-expand"></div>
                    )}
                  </div>
                </div>
              </div>

              {/* Phone */}
              <div className="space-y-2">
                <label className="block text-sm font-medium text-gray-300">
                  Phone Number *
                </label>
                <div className="relative">
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    onFocus={() => setFocusedField("phone")}
                    onBlur={() => setFocusedField(null)}
                    required
                    className="w-full px-4 py-3 bg-white/5 border border-white/10 text-white rounded-xl focus:outline-none focus:border-orange-500 focus:ring-2 focus:ring-orange-500/20 transition-all placeholder-gray-500"
                    placeholder="+91 (555) 000-0000"
                  />
                  {focusedField === "phone" && (
                    <div className="absolute -bottom-1 left-0 right-0 h-0.5 bg-gradient-to-r from-orange-500 to-amber-500 animate-expand"></div>
                  )}
                </div>
              </div>

              {/* Date, Time & Guests Row */}
              <div className="grid sm:grid-cols-3 gap-4">
                <div className="space-y-2">
                  <label className="block text-sm font-medium text-gray-300">
                    Date *
                  </label>
                  <input
                    type="date"
                    name="date"
                    value={formData.date}
                    onChange={handleChange}
                    required
                    min={new Date().toISOString().split("T")[0]}
                    className="w-full px-4 py-3 bg-white/5 border border-white/10 text-white rounded-xl focus:outline-none focus:border-orange-500 focus:ring-2 focus:ring-orange-500/20 transition-all"
                  />
                </div>

                <div className="space-y-2">
                  <label className="block text-sm font-medium text-gray-300">
                    Time *
                  </label>
                  <input
                    type="time"
                    name="time"
                    value={formData.time}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-white/5 border border-white/10 text-white rounded-xl focus:outline-none focus:border-orange-500 focus:ring-2 focus:ring-orange-500/20 transition-all"
                  />
                </div>

                <div className="space-y-2">
                  <label className="block text-sm font-medium text-gray-300">
                    Guests *
                  </label>
                  <select
                    name="guests"
                    value={formData.guests}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-white/5 border border-white/10 text-white rounded-xl focus:outline-none focus:border-orange-500 focus:ring-2 focus:ring-orange-500/20 transition-all appearance-none cursor-pointer"
                  >
                    {guestOptions.map((num) => (
                      <option key={num} value={num} className="bg-gray-800">
                        {num} {num === 1 ? "Guest" : "Guests"}
                      </option>
                    ))}
                  </select>
                </div>
              </div>

              {/* Special Requests */}
              <div className="space-y-2">
                <label className="block text-sm font-medium text-gray-300">
                  Special Requests
                </label>
                <textarea
                  name="requests"
                  value={formData.requests}
                  onChange={handleChange}
                  onFocus={() => setFocusedField("requests")}
                  onBlur={() => setFocusedField(null)}
                  className="w-full px-4 py-3 bg-white/5 border border-white/10 text-white rounded-xl focus:outline-none focus:border-orange-500 focus:ring-2 focus:ring-orange-500/20 transition-all resize-none placeholder-gray-500"
                  rows={3}
                  placeholder="Dietary restrictions, seating preferences, special occasions..."
                ></textarea>
              </div>

              {/* Submit Button */}

              <button
                onClick={handleSubmit}
                disabled={isSubmitting}
                className="group relative w-full py-4 bg-gradient-to-r from-orange-500 to-amber-500 text-white font-bold rounded-xl overflow-hidden transition-all duration-300 transform hover:scale-[1.02] hover:shadow-2xl hover:shadow-orange-500/50 disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none"
              >
                <span className="relative z-10 flex items-center justify-center gap-2">
                  {isSubmitting ? (
                    <>
                      <svg
                        className="animate-spin h-5 w-5"
                        fill="none"
                        viewBox="0 0 24 24"
                      >
                        <circle
                          className="opacity-25"
                          cx="12"
                          cy="12"
                          r="10"
                          stroke="currentColor"
                          strokeWidth="4"
                        ></circle>
                        <path
                          className="opacity-75"
                          fill="currentColor"
                          d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                        ></path>
                      </svg>
                      Sending Confirmation...
                    </>
                  ) : (
                    <>
                      Confirm Reservation
                      <svg
                        className="w-5 h-5 transition-transform group-hover:translate-x-1"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M17 8l4 4m0 0l-4 4m4-4H3"
                        />
                      </svg>
                    </>
                  )}
                </span>
                <div className="absolute inset-0 bg-gradient-to-r from-amber-500 to-orange-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </button>

              <p className="text-center text-gray-400 text-sm">
                📧 A confirmation email will be sent to your address
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ReservationForm;
