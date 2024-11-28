import React from "react";
import HB from "../assets/HB.jpg";

function Home() {
  return (
    <div id="home" className="relative h-screen flex items-center justify-center">
      {/* Background Image with Dark Overlay */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: `url(${HB})`,
          filter: "brightness(.75)",
        }}
      />

      {/* Half-Bottom Shadow Overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-[rgba(255,255,255,0)]"></div>

      {/* Additional Dark Overlay */}
      <div className="absolute inset-0 bg-black opacity-5"></div>

      {/* Hero Text */}
      <div className="relative z-10 text-center text-white p-8">
        <h1 className="text-5xl md:text-6xl font-bold mb-4">
          Experience Luxury Like Never Before
        </h1>
        <p className="text-lg md:text-xl mb-8">
          Discover the ambiance of elegance, comfort, and exclusivity.
        </p>
        <a href="#reservation">
          <button className="bg-orange-500 text-black font-semibold px-6 py-3 rounded-full hover:bg-orange-600 transition">
            Reserve Your Spot
          </button>
        </a>
      </div>
    </div>
  );
}

export default Home;
