import React, { useState, useEffect } from "react";

// Sample dishes data
const dishes = [
  { id: 1, name: "Grilled Salmon", image: "https://images.unsplash.com/photo-1467003909585-2f8a72700288?w=400", price: "$28", category: "Seafood" },
  { id: 2, name: "Beef Wellington", image: "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=400", price: "$42", category: "Meat" },
  { id: 3, name: "Truffle Pasta", image: "https://images.unsplash.com/photo-1621996346565-e3dbc646d9a9?w=400", price: "$32", category: "Pasta" },
  { id: 4, name: "Lobster Bisque", image: "https://images.unsplash.com/photo-1547592166-23ac45744acd?w=400", price: "$24", category: "Soup" },
  { id: 5, name: "Wagyu Steak", image: "https://images.unsplash.com/photo-1558030006-450675393462?w=400", price: "$65", category: "Meat" },
  { id: 6, name: "Caesar Salad", image: "https://images.unsplash.com/photo-1546793665-c74683f339c1?w=400", price: "$18", category: "Salad" },
];

function FeaturedSection() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlay, setIsAutoPlay] = useState(true);

  useEffect(() => {
    if (!isAutoPlay) return;
    
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % dishes.length);
    }, 4000);

    return () => clearInterval(interval);
  }, [isAutoPlay]);

  const goToSlide = (index) => {
    setCurrentIndex(index);
    setIsAutoPlay(false);
    setTimeout(() => setIsAutoPlay(true), 8000);
  };

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % dishes.length);
    setIsAutoPlay(false);
    setTimeout(() => setIsAutoPlay(true), 8000);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + dishes.length) % dishes.length);
    setIsAutoPlay(false);
    setTimeout(() => setIsAutoPlay(true), 8000);
  };

  const getSlidePosition = (index) => {
    const diff = index - currentIndex;
    if (diff === 0) return "active";
    if (diff === 1 || diff === -(dishes.length - 1)) return "next";
    if (diff === -1 || diff === dishes.length - 1) return "prev";
    return "hidden";
  };

  return (
    <div id="menu" className="relative w-full min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-black overflow-hidden">
      
      {/* Animated Background Elements */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-20 left-20 w-96 h-96 bg-orange-500 rounded-full blur-3xl animate-pulse-slow"></div>
        <div className="absolute bottom-20 right-20 w-96 h-96 bg-amber-500 rounded-full blur-3xl animate-pulse-delayed"></div>
      </div>

      {/* Grid Pattern Overlay */}
      <div className="absolute inset-0 opacity-5" style={{
        backgroundImage: `linear-gradient(rgba(255,255,255,.05) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.05) 1px, transparent 1px)`,
        backgroundSize: '50px 50px'
      }}></div>

      {/* Header Section */}
      <div className="relative z-10 pt-24 pb-12 text-center px-6">
        <div className="inline-flex items-center gap-2 bg-orange-500/10 backdrop-blur-sm border border-orange-500/20 rounded-full px-6 py-2 mb-6">
          <span className="w-2 h-2 bg-orange-400 rounded-full animate-pulse"></span>
          <span className="text-orange-400 text-sm font-medium tracking-wider">SIGNATURE DISHES</span>
        </div>
        
        <h1 className="text-5xl md:text-7xl font-bold mb-6">
          <span className="bg-gradient-to-r from-white via-orange-100 to-amber-200 bg-clip-text text-transparent">
            Culinary Masterpieces
          </span>
        </h1>
        
        <p className="text-gray-400 text-lg md:text-xl max-w-2xl mx-auto mb-8">
          Discover our chef's carefully curated selection of extraordinary dishes
        </p>
      </div>

      {/* Carousel Section */}
      <div className="relative z-10 px-6 pb-20">
        <div className="max-w-7xl mx-auto">
          
          {/* Main Carousel */}
          <div className="relative h-[500px] md:h-[600px] flex items-center justify-center">
            
            {dishes.map((dish, index) => {
              const position = getSlidePosition(index);
              
              return (
                <div
                  key={dish.id}
                  className={`absolute transition-all duration-700 ease-out ${
                    position === "active"
                      ? "z-30 scale-100 opacity-100 translate-x-0"
                      : position === "next"
                      ? "z-20 scale-75 opacity-40 translate-x-[60%] md:translate-x-[80%]"
                      : position === "prev"
                      ? "z-20 scale-75 opacity-40 -translate-x-[60%] md:-translate-x-[80%]"
                      : "z-10 scale-50 opacity-0"
                  }`}
                >
                  <div className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-3xl overflow-hidden shadow-2xl border border-gray-700/50 backdrop-blur-sm">
                    
                    {/* Image Container */}
                    <div className="relative w-[280px] h-[280px] md:w-[400px] md:h-[400px] overflow-hidden">
                      <img
                        src={dish.image}
                        alt={dish.name}
                        className="w-full h-full object-cover transition-transform duration-700 hover:scale-110"
                      />
                      
                      {/* Category Badge */}
                      <div className="absolute top-4 left-4 bg-orange-500 text-white px-4 py-1 rounded-full text-sm font-semibold">
                        {dish.category}
                      </div>
                      
                      {/* Gradient Overlay */}
                      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent"></div>
                    </div>
                    
                    {/* Info Section */}
                    <div className="p-6 md:p-8">
                      <h3 className="text-2xl md:text-3xl font-bold text-white mb-2">
                        {dish.name}
                      </h3>
                      <div className="flex items-center justify-between">
                        <span className="text-3xl font-bold text-orange-400">
                          {dish.price}
                        </span>
                        <button className="bg-gradient-to-r from-orange-500 to-amber-500 text-white px-6 py-2 rounded-full font-semibold hover:shadow-lg hover:shadow-orange-500/50 transition-all duration-300 transform hover:scale-105">
                          Order Now
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}

            {/* Navigation Arrows */}
            <button
              onClick={prevSlide}
              className="absolute left-4 md:left-8 z-40 bg-white/10 backdrop-blur-md border border-white/20 text-white p-4 rounded-full hover:bg-white/20 transition-all duration-300 group"
              aria-label="Previous dish"
            >
              <svg className="w-6 h-6 transition-transform group-hover:-translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7" />
              </svg>
            </button>
            
            <button
              onClick={nextSlide}
              className="absolute right-4 md:right-8 z-40 bg-white/10 backdrop-blur-md border border-white/20 text-white p-4 rounded-full hover:bg-white/20 transition-all duration-300 group"
              aria-label="Next dish"
            >
              <svg className="w-6 h-6 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>

          {/* Dots Navigation */}
          <div className="flex justify-center gap-3 mt-12">
            {dishes.map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`transition-all duration-300 rounded-full ${
                  currentIndex === index
                    ? "w-12 bg-gradient-to-r from-orange-500 to-amber-500"
                    : "w-3 bg-gray-600 hover:bg-gray-500"
                } h-3`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>

          {/* View Full Menu CTA */}
          <div className="text-center mt-16">
            <a href="/fullmenu">
              <button className="group relative bg-gradient-to-r from-orange-500 to-amber-500 text-white font-bold px-10 py-4 rounded-full overflow-hidden transition-all duration-300 transform hover:scale-105 hover:shadow-2xl hover:shadow-orange-500/50">
                <span className="relative z-10 flex items-center gap-2">
                  View Full Menu
                  <svg className="w-5 h-5 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </span>
                <div className="absolute inset-0 bg-gradient-to-r from-amber-500 to-orange-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </button>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default FeaturedSection;