// FeaturedSection.js
import React, { useState, useEffect } from "react";
import {dishes} from "../data/data";  // Importing the data file
import { NavLink } from "react-router-dom";

function FeaturedSection() {
  const [rotationAngle, setRotationAngle] = useState(0);

  useEffect(() => {
    const rotationInterval = setInterval(() => {
      setRotationAngle((prevAngle) => prevAngle + 360 / dishes.length);
    }, 3000); // Rotation speed

    return () => clearInterval(rotationInterval);
  }, [dishes.length]);

  return (
    <div
      id="menu"
      className="relative w-full h-screen flex items-center justify-center bg-cover bg-center overflow-hidden"
    >
      {/* Overlay for Dark Theme */}
      <div className="absolute inset-0 bg-gray-900"></div>

      {/* Headline, Tagline, and Menu Link */}
      <div className="absolute top-20 text-center text-white z-10">
        <h1 className="text-4xl md:text-6xl font-bold mb-4">Experience Fine Dining</h1>
        <p className="text-lg md:text-2xl italic">An unforgettable journey of flavors</p>
        <NavLink to="/fullmenu">
          <h1 className="inline-block mt-[450px] px-6 py-3 text-lg font-semibold bg-orange-500 text-white rounded hover:bg-orange-600 transition">
            View Full Menu
          </h1>
        </NavLink>
      </div>

      {/* Rotating Dishes */}
      <div className="relative w-[400px] h-[400px]">
        <div className="absolute inset-x-0 -bottom-[450px] flex items-center justify-center">
          {dishes.map((dish, index) => {
            const angle = rotationAngle + index * (360 / dishes.length);
            const radius = 700; // Adjust the radius to control distance from the center
            const x = radius * Math.cos((angle * Math.PI) / 180);
            const y = radius * Math.sin((angle * Math.PI) / 180);

            return (
              <div
                key={index}
                className="absolute flex flex-col items-center"
                style={{
                  transform: `translate(${x}px, ${y}px)`,
                  transition: "transform 1s linear",
                }}
              >
                <img
                  src={dish.image}
                  alt={dish.name}
                  className="w-[250px] h-[250px] rounded-[50px] shadow-lg"
                />
                <span className="text-white text-sm mt-2">{dish.name}</span>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default FeaturedSection;
