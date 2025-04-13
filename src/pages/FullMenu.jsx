// FullMenu.js
import React, { useState } from "react";
import { menuItems } from "../data/data"; // Importing the data file

const FullMenu = () => {
  const [smallBitesImage, setSmallBitesImage] = useState(menuItems.smallBites[0].image);
  const [teaImage, setTeaImage] = useState(menuItems.tea[0].image);

  return (
    
    <div className="font-sans p-1 bg-gray-900 text-white overflow-hidden">
      {/* Menu Sections */}
      <section className="container mx-auto px-4 py-8 space-y-16">
        {/* Small Bites */}
        <MenuSection
          title="Small Bites"
          items={menuItems.smallBites}
          hoveredImage={smallBitesImage}
          setHoveredImage={setSmallBitesImage}
          defaultImage={menuItems.smallBites[0].image}
        />

        {/* Tea */}
        <MenuSection
          title="Tea"
          items={menuItems.tea}
          hoveredImage={teaImage}
          setHoveredImage={setTeaImage}
          defaultImage={menuItems.tea[0].image}
        />
      </section>

      {/* Contact Section */}
      <section className="bg-gray-800 py-12">
        <div className="container mx-auto flex flex-col items-center text-center space-y-4">
          <div className="text-orange-400 text-4xl font-bold">40% Business Lunch</div>
          <h2 className="text-2xl font-semibold text-gray-300">Our Contact</h2>
          <p className="text-gray-400">Sample text. Click to select the Text Element.</p>
          <button className="bg-orange-500 text-white px-6 py-2 rounded-md mt-4 hover:bg-orange-600">
            Read More
          </button>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-gray-400 py-4 text-center">
        <p>© 2024 My Company. All rights reserved.</p>
      </footer>
    </div>
  );
};

const MenuSection = ({ title, items, hoveredImage, setHoveredImage, defaultImage }) => (
  <div className="flex flex-col md:flex-row md:space-x-8 items-center">
    <div className="md:w-1/3 mb-4 md:mb-0">
      {/* Display the current hovered image */}
      <img
        src={hoveredImage}
        alt={title}
        className="rounded-lg shadow-lg"
      />
    </div>
    <div className="md:w-2/3">
      <h3 className="text-2xl font-bold text-gray-200">{title}</h3>
      <ul className="space-y-2">
        {items.map((item, index) => (
          <li
            key={index}
            className="flex justify-between border-b border-gray-700 pb-2 text-gray-300"
            onMouseEnter={() => setHoveredImage(item.image)}
            onMouseLeave={() => setHoveredImage(defaultImage)}
          >
            <span>{item.name}</span>
            <span className="font-semibold">{item.price}</span>
          </li>
        ))}
      </ul>
    </div>
  </div>
);

export default FullMenu;
