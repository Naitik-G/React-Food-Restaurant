// FullMenu.js
import React, { useState } from "react";
import { menuItems } from "../data/data"; // Importing the data file

const FullMenu = () => {
  const [smallBitesImage, setSmallBitesImage] = useState(menuItems.smallBites[0]);
  const [teaImage, setTeaImage] = useState(menuItems.tea[0]);

  return (
    <div className="font-sans bg-gradient-to-br from-gray-900 via-gray-800 to-black text-white min-h-screen overflow-hidden">
      
      {/* Animated Background */}
      <div className="absolute inset-0 opacity-20 pointer-events-none">
        <div className="absolute top-40 left-20 w-96 h-96 bg-orange-500 rounded-full blur-3xl animate-pulse-slow"></div>
        <div className="absolute bottom-40 right-20 w-96 h-96 bg-amber-500 rounded-full blur-3xl animate-pulse-delayed"></div>
      </div>

      {/* Hero Section */}
      <div className="relative z-10 text-center py-20 px-4">
        <div className="inline-flex items-center gap-2 bg-orange-500/10 backdrop-blur-sm border border-orange-500/20 rounded-full px-6 py-2 mb-6">
          <span className="w-2 h-2 bg-orange-400 rounded-full animate-pulse"></span>
          <span className="text-orange-400 text-sm font-medium tracking-wider">FULL MENU</span>
        </div>
        
        <h1 className="text-5xl md:text-7xl font-bold mb-6">
          <span className="bg-gradient-to-r from-white via-orange-100 to-amber-200 bg-clip-text text-transparent">
            Explore Our
          </span>
          <br />
          <span className="text-white">Culinary Collection</span>
        </h1>
        
        <p className="text-gray-400 text-lg max-w-2xl mx-auto">
          From small bites to signature beverages, discover flavors that delight
        </p>
      </div>

      {/* Menu Sections */}
      <section className="relative z-10 container mx-auto px-4 py-12 space-y-20">
        
        {/* Small Bites */}
        <MenuSection
          title="Small Bites"
          subtitle="Perfect starters to begin your culinary journey"
          items={menuItems.smallBites}
          selectedItem={smallBitesImage}
          setSelectedItem={setSmallBitesImage}
        />

        {/* Tea & Coffee */}
        <MenuSection
          title="Tea & Coffee"
          subtitle="Handcrafted beverages to complement your meal"
          items={menuItems.tea}
          selectedItem={teaImage}
          setSelectedItem={setTeaImage}
          reverse
        />
      </section>

      {/* Special Offer CTA */}
      <section className="relative z-10 mx-4 mb-20">
        <div className="container mx-auto">
          <div className="bg-gradient-to-r from-orange-500/20 to-amber-500/20 backdrop-blur-xl border border-orange-500/30 rounded-3xl p-12 text-center overflow-hidden relative">
            
            {/* Decorative Elements */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-orange-500/10 rounded-full blur-3xl"></div>
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-amber-500/10 rounded-full blur-3xl"></div>
            
            <div className="relative z-10">
              <div className="inline-block bg-gradient-to-r from-orange-500 to-amber-500 text-white text-5xl md:text-6xl font-bold px-8 py-4 rounded-2xl mb-6 transform -rotate-2 shadow-2xl">
                40% OFF
              </div>
              
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Business Lunch Special
              </h2>
              
              <p className="text-gray-300 text-lg mb-8 max-w-2xl mx-auto">
                Enjoy our exclusive weekday lunch menu with a special discount. 
                Available Monday through Friday, 12 PM - 3 PM.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a href="#reservation">
                  <button className="group relative bg-gradient-to-r from-orange-500 to-amber-500 text-white font-bold px-8 py-4 rounded-full overflow-hidden transition-all duration-300 transform hover:scale-105 hover:shadow-2xl hover:shadow-orange-500/50">
                    <span className="relative z-10 flex items-center gap-2">
                      Reserve Now
                      <svg className="w-5 h-5 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                      </svg>
                    </span>
                    <div className="absolute inset-0 bg-gradient-to-r from-amber-500 to-orange-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  </button>
                </a>
                
                <a href="#contact">
                  <button className="bg-white/10 backdrop-blur-md border-2 border-white/30 text-white font-semibold px-8 py-4 rounded-full hover:bg-white/20 hover:border-white/50 transition-all duration-300 transform hover:scale-105">
                    Learn More
                  </button>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="relative z-10 bg-gray-900/50 backdrop-blur-sm border-t border-white/10 py-8 text-center">
        <p className="text-gray-400">© 2024 Foodify Restaurant. All rights reserved.</p>
        <div className="flex justify-center gap-6 mt-4">
          <a href="#" className="text-gray-400 hover:text-orange-400 transition-colors">Privacy</a>
          <a href="#" className="text-gray-400 hover:text-orange-400 transition-colors">Terms</a>
          <a href="#contact" className="text-gray-400 hover:text-orange-400 transition-colors">Contact</a>
        </div>
      </footer>

      <style>{`
        @keyframes pulse-slow {
          0%, 100% { transform: scale(1); opacity: 0.3; }
          50% { transform: scale(1.1); opacity: 0.5; }
        }
        
        @keyframes pulse-delayed {
          0%, 100% { transform: scale(1); opacity: 0.3; }
          50% { transform: scale(1.05); opacity: 0.4; }
        }
        
        .animate-pulse-slow {
          animation: pulse-slow 8s ease-in-out infinite;
        }
        
        .animate-pulse-delayed {
          animation: pulse-delayed 10s ease-in-out infinite 2s;
        }
      `}</style>
    </div>
  );
};

const MenuSection = ({ title, subtitle, items, selectedItem, setSelectedItem, reverse }) => {
  return (
    <div className={`flex flex-col ${reverse ? 'lg:flex-row-reverse' : 'lg:flex-row'} gap-8 items-center`}>
      
      {/* Image Display */}
      <div className="lg:w-1/2">
        <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl p-4 shadow-2xl">
          <div className="relative rounded-2xl overflow-hidden aspect-square group">
            <img
              src={selectedItem.image}
              alt={selectedItem.name}
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
            
            {/* Overlay Info */}
            <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
              <h3 className="text-2xl font-bold mb-2">{selectedItem.name}</h3>
              <p className="text-gray-200 text-sm mb-2">{selectedItem.description}</p>
              <div className="text-3xl font-bold text-orange-400">{selectedItem.price}</div>
            </div>
          </div>
        </div>
      </div>

      {/* Menu List */}
      <div className="lg:w-1/2 space-y-6">
        <div className="mb-8">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-3">{title}</h2>
          <p className="text-gray-400 text-lg">{subtitle}</p>
        </div>

        <div className="space-y-3">
          {items.map((item, index) => (
            <button
              key={index}
              onClick={() => setSelectedItem(item)}
              onMouseEnter={() => setSelectedItem(item)}
              className={`w-full text-left bg-white/5 backdrop-blur-sm border rounded-2xl p-5 transition-all duration-300 group ${
                selectedItem.name === item.name
                  ? 'border-orange-500 bg-orange-500/10 shadow-lg shadow-orange-500/20'
                  : 'border-white/10 hover:border-orange-500/50 hover:bg-white/10'
              }`}
            >
              <div className="flex justify-between items-start mb-2">
                <h3 className={`text-xl font-bold transition-colors ${
                  selectedItem.name === item.name ? 'text-orange-400' : 'text-white group-hover:text-orange-400'
                }`}>
                  {item.name}
                </h3>
                <span className="text-2xl font-bold text-orange-400 ml-4">{item.price}</span>
              </div>
              <p className="text-gray-400 text-sm">{item.description}</p>
            </button>
          ))}
        </div>

        {/* Add to Order Button */}
        <button className="w-full bg-gradient-to-r from-orange-500 to-amber-500 text-white font-bold py-4 rounded-xl hover:shadow-lg hover:shadow-orange-500/50 transition-all duration-300 transform hover:scale-[1.02] mt-6">
          Order {title}
        </button>
      </div>
    </div>
  );
};

export default FullMenu;
