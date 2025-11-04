import React, { useState, useEffect } from "react";

function Home() {
  const [scrollY, setScrollY] = useState(0);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
    
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };
    
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const parallaxOffset = scrollY * 0.5;

  return (
    <div id="home" className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* Animated Background with Parallax */}
      <div
        className="absolute inset-0 bg-cover bg-center transition-transform duration-100"
        style={{
          backgroundImage: `url(https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?q=80&w=2070)`,
          transform: `translateY(${parallaxOffset}px) scale(1.1)`,
        }}
      />

      {/* Animated Gradient Overlays */}
      <div className="absolute inset-0 bg-gradient-to-br from-orange-900/40 via-transparent to-amber-900/40 animate-pulse-slow"></div>
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>
      
      {/* Subtle Grid Pattern Overlay */}
      <div className="absolute inset-0 opacity-10" style={{
        backgroundImage: `radial-gradient(circle at 1px 1px, white 1px, transparent 0)`,
        backgroundSize: '40px 40px'
      }}></div>

      {/* Floating Decorative Elements */}
      <div className="absolute top-20 left-10 w-32 h-32 bg-orange-500/10 rounded-full blur-3xl animate-float"></div>
      <div className="absolute bottom-40 right-20 w-40 h-40 bg-amber-500/10 rounded-full blur-3xl animate-float-delayed"></div>

      {/* Hero Content */}
      <div className={`relative z-10 text-center text-white px-6 md:px-8 max-w-5xl mx-auto transition-all duration-1000 transform ${
        isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
      }`}>
        
        {/* Premium Badge */}
        <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-md border border-white/20 rounded-full px-6 py-2 mb-8 animate-fade-in">
          <span className="w-2 h-2 bg-orange-400 rounded-full animate-pulse"></span>
          <span className="text-sm font-medium tracking-wider">PREMIUM DINING EXPERIENCE</span>
        </div>

        {/* Main Heading with Enhanced Gradient Text */}
        <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold mb-6 leading-tight">
          <span className="block relative">
            <span className="relative inline-block bg-gradient-to-r from-orange-400 via-amber-300 to-yellow-200 bg-clip-text text-transparent animate-gradient-x bg-[length:200%_auto] drop-shadow-[0_0_30px_rgba(251,146,60,0.5)]">
              Culinary Excellence
            </span>
            {/* Glowing underline effect */}
            <span className="absolute -bottom-2 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-orange-500 to-transparent opacity-50 blur-sm"></span>
          </span>
          <span className="block mt-4 text-4xl md:text-5xl lg:text-6xl">
            <span className="relative inline-block">
              <span className="text-white drop-shadow-[0_2px_10px_rgba(0,0,0,0.5)]">
                Meets 
              </span>
              <span className="ml-3 bg-gradient-to-r from-amber-200 via-orange-300 to-amber-400 bg-clip-text text-transparent animate-gradient-x bg-[length:200%_auto] drop-shadow-[0_0_20px_rgba(251,146,60,0.4)]">
                Refined Elegance
              </span>
            </span>
          </span>
        </h1>

        {/* Subtitle */}
        <p className="text-lg md:text-2xl mb-10 text-gray-200 max-w-3xl mx-auto font-light leading-relaxed">
          Indulge in an unforgettable journey of exquisite flavors, impeccable service, 
          and sophisticated ambiance
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <a href="#reservation" className="group">
            <button className="relative bg-gradient-to-r from-orange-500 to-amber-500 text-white font-semibold px-8 py-4 rounded-full overflow-hidden transition-all duration-300 transform hover:scale-105 hover:shadow-2xl hover:shadow-orange-500/50">
              <span className="relative z-10 flex items-center gap-2">
                Reserve Your Table
                <svg className="w-5 h-5 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </span>
              <div className="absolute inset-0 bg-gradient-to-r from-amber-500 to-orange-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </button>
          </a>
          
          <a href="#menu">
            <button className="bg-white/10 backdrop-blur-md border-2 border-white/30 text-white font-semibold px-8 py-4 rounded-full hover:bg-white/20 hover:border-white/50 transition-all duration-300 transform hover:scale-105">
              Explore Menu
            </button>
          </a>
        </div>

        {/* Feature Stats */}
        <div className="grid grid-cols-3 gap-8 mt-16 pt-8 border-t border-white/20 max-w-2xl mx-auto">
          <div className="text-center">
            <div className="text-3xl md:text-4xl font-bold text-orange-400 mb-1">5★</div>
            <div className="text-xs md:text-sm text-gray-300 uppercase tracking-wide">Michelin Rated</div>
          </div>
          <div className="text-center">
            <div className="text-3xl md:text-4xl font-bold text-orange-400 mb-1">20+</div>
            <div className="text-xs md:text-sm text-gray-300 uppercase tracking-wide">Years Legacy</div>
          </div>
          <div className="text-center">
            <div className="text-3xl md:text-4xl font-bold text-orange-400 mb-1">50K+</div>
            <div className="text-xs md:text-sm text-gray-300 uppercase tracking-wide">Happy Guests</div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="flex flex-col items-center gap-2 text-white/60">
          <span className="text-xs uppercase tracking-widest">Scroll</span>
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </div>
      </div>
    </div>
  );
}

export default Home;