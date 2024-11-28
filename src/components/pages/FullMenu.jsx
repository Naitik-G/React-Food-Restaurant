import React, { useState } from "react";
import pasta from "../../assets/pasta.jpg";
import pastry from "../../assets/pastry.jpg";
import Biryani from "../../assets/Biryani.jpg";
import Dosa from "../../assets/Dosa.jpg";
import ButterTikka from "../../assets/ButterTikka.jpg";
import BlackTea from "../../assets/BlackTea.jpg";
import orangeTea from "../../assets/GreenTea.jpg";
import WhiteTea1 from "../../assets/WhiteTea1.jpg";
import Latte1 from "../../assets/Latte1.jpg";
import Cappuccino1 from "../../assets/Cappuccino1.jpg";
import Espresso from "../../assets/Espresso.jpg";

const FullMenu = () => {
  // Separate states for each section's default image
  const [smallBitesImage, setSmallBitesImage] = useState(pastry);
  const [teaImage, setTeaImage] = useState(orangeTea);

  return (
<div className="font-sans p-1 bg-gray-900 text-white overflow-hidden">
{/* Menu Sections */}
      <section className="container mx-auto px-4 py-8 space-y-16">
        {/* Small Bites */}
        <MenuSection
          title="Small Bites"
          items={[
            {
              name: "orange Papaya Salad",
              price: "$12",
              description: "Shrimp, chili & lime",
              image: pastry,
            },
            {
              name: "Black Pepper Calamari",
              price: "$14",
              description: "Galangal dressing and roasted red thai basil",
              image: pasta,
            },
            {
              name: "Biryani",
              price: "$15",
              description: "Aromatic basmati rice with tender chicken, spices, and herbs",
              image: Biryani,
            },
            {
              name: "Butter Chicken",
              price: "$18",
              description: "Creamy tomato-based curry with succulent chicken pieces",
              image: ButterTikka,
            },
            {
              name: "Masala Dosa",
              price: "$10",
              description: "Crispy rice crepe filled with spiced potato mixture",
              image: Dosa,
            },
          ]}
          hoveredImage={smallBitesImage}
          setHoveredImage={setSmallBitesImage}
          defaultImage={pastry}
        />

        {/* Tea */}
        <MenuSection
          title="Tea"
          items={[
            {
              name: "orange Tea",
              price: "$5",
              description: "Refreshing and healthy orange tea leaves",
              image: orangeTea,
            },
            {
              name: "Black Tea",
              price: "$5",
              description: "Refreshing and healthy tea leaves",
              image: BlackTea,
            },
            {
              name: "White Tea",
              price: "$7",
              description: "Delicate and subtle white tea leaves",
              image: WhiteTea1,
            },
            {
              name: "Espresso",
              price: "$3",
              description: "Strong and rich espresso shot",
              image: Espresso,
            },
            {
              name: "Latte",
              price: "$4",
              description: "Smooth and creamy milk coffee",
              image: Latte1,
            },
            {
              name: "Cappuccino",
              price: "$4.50",
              description: "Frothy and balanced coffee with milk",
              image: Cappuccino1,
            },
          ]}
          hoveredImage={teaImage}
          setHoveredImage={setTeaImage}
          defaultImage={orangeTea}
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
        // Removed the unnecessary window.scrollTo(0, 0)
      />

    </div>
    <div className="md:w-2/3">
      <h3 className="text-2xl font-bold  text-gray-200">{title}</h3>
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
