import React, { useState, useRef } from "react";

function AboutUs() {
  const [isPlaying, setIsPlaying] = useState(false);
  const [isHovering, setIsHovering] = useState(false);
  const videoRef = useRef(null);

  const handleMouseEnter = () => {
    setIsHovering(true);
    if (videoRef.current && !isPlaying) {
      videoRef.current.play();
    }
  };

  const handleMouseLeave = () => {
    setIsHovering(false);
    if (videoRef.current && !isPlaying) {
      videoRef.current.pause();
      videoRef.current.currentTime = 0; // Reset to beginning
    }
  };

  const handleVideoClick = () => {
    setIsPlaying(true);
    if (videoRef.current) {
      videoRef.current.play();
    }
  };

  const features = [
    {
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
      title: "Farm to Table",
      description: "Fresh, locally sourced ingredients delivered daily"
    },
    {
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v13m0-13V6a2 2 0 112 2h-2zm0 0V5.5A2.5 2.5 0 109.5 8H12zm-7 4h14M5 12a2 2 0 110-4h14a2 2 0 110 4M5 12v7a2 2 0 002 2h10a2 2 0 002-2v-7" />
        </svg>
      ),
      title: "Award Winning",
      description: "Recognized by Michelin Guide and top critics"
    },
    {
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
        </svg>
      ),
      title: "Expert Team",
      description: "Chefs with 20+ years of culinary excellence"
    },
    {
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
        </svg>
      ),
      title: "Passion Driven",
      description: "Every dish crafted with love and dedication"
    }
  ];

  const stats = [
    { number: "20+", label: "Years Experience" },
    { number: "10K+", label: "Happy Customers" },
    { number: "150+", label: "Signature Dishes" },
    { number: "5★", label: "Average Rating" }
  ];

  return (
    <div id="about" className="relative bg-gradient-to-br from-gray-900 via-gray-800 to-black text-gray-200 py-20 px-4 overflow-hidden">
      
      {/* Animated Background Elements */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-40 left-20 w-96 h-96 bg-orange-500 rounded-full blur-3xl animate-pulse-slow"></div>
        <div className="absolute bottom-40 right-20 w-96 h-96 bg-amber-500 rounded-full blur-3xl animate-pulse-delayed"></div>
      </div>

      {/* Grid Pattern */}
      <div className="absolute inset-0 opacity-5" style={{
        backgroundImage: `linear-gradient(rgba(255,255,255,.05) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.05) 1px, transparent 1px)`,
        backgroundSize: '50px 50px'
      }}></div>

      <div className="relative z-10 max-w-7xl mx-auto">
        
        {/* Header Section */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-orange-500/10 backdrop-blur-sm border border-orange-500/20 rounded-full px-6 py-2 mb-6">
            <span className="w-2 h-2 bg-orange-400 rounded-full animate-pulse"></span>
            <span className="text-orange-400 text-sm font-medium tracking-wider">OUR STORY</span>
          </div>
          
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            <span className="bg-gradient-to-r from-white via-orange-100 to-amber-200 bg-clip-text text-transparent">
              Where Passion Meets
            </span>
            <br />
            <span className="text-white">Culinary Perfection</span>
          </h1>
          
          <p className="text-gray-400 text-lg max-w-3xl mx-auto leading-relaxed">
            For over two decades, we've been crafting unforgettable dining experiences. 
            Our journey began with a simple dream: to bring authentic flavors and genuine 
            hospitality to every table.
          </p>
        </div>

        {/* Main Content Grid */}
        <div className="grid lg:grid-cols-2 gap-12 items-start mb-20">
          
          {/* Left Column - Video */}
          <div className="space-y-6">
            <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl p-2 shadow-2xl">
              <div 
                className="relative rounded-2xl overflow-hidden group"
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
              >
                {!isPlaying && (
                  <div 
                    onClick={handleVideoClick}
                    className={`absolute inset-0 bg-gradient-to-br from-black/60 to-black/40 flex items-center justify-center cursor-pointer z-10 transition-all duration-300 ${
                      isHovering ? 'bg-black/40 opacity-80' : 'bg-black/60 opacity-100'
                    }`}
                  >
                    <div className={`w-20 h-20 bg-gradient-to-r from-orange-500 to-amber-500 rounded-full flex items-center justify-center transform transition-all duration-300 shadow-2xl ${
                      isHovering ? 'scale-110 shadow-orange-500/50' : 'scale-100'
                    }`}>
                      <svg className="w-10 h-10 text-white ml-1" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M8 5v14l11-7z" />
                      </svg>
                    </div>
                    <div className="absolute bottom-6 left-6 right-6">
                      <h3 className="text-white text-2xl font-bold mb-2">
                        {isHovering ? 'Preview Playing...' : 'Behind the Scenes'}
                      </h3>
                      <p className="text-gray-200 text-sm">
                        {isHovering ? 'Click to watch with sound' : 'Hover to preview or click to watch'}
                      </p>
                    </div>
                  </div>
                )}
                <video
                  ref={videoRef}
                  src="/kitchen.mp4"
                  controls={isPlaying}
                  muted={!isPlaying}
                  loop={!isPlaying}
                  className="w-full aspect-video bg-gray-900"
                  onClick={handleVideoClick}
                >
                  Your browser does not support the video tag.
                </video>
              </div>
            </div>

            {/* Stats Row */}
            <div className="grid grid-cols-2 gap-4">
              {stats.map((stat, index) => (
                <div
                  key={index}
                  className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-6 text-center hover:bg-white/10 transition-all duration-300 group"
                >
                  <div className="text-4xl font-bold bg-gradient-to-r from-orange-400 to-amber-400 bg-clip-text text-transparent mb-2 group-hover:scale-110 transition-transform">
                    {stat.number}
                  </div>
                  <div className="text-gray-400 text-sm uppercase tracking-wide">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column - Story & Features */}
          <div className="space-y-8">
            
            {/* Our Philosophy */}
            <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl p-8 space-y-4">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 bg-gradient-to-br from-orange-500 to-amber-500 rounded-xl flex items-center justify-center">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" />
                  </svg>
                </div>
                <h2 className="text-2xl font-bold text-white">Our Philosophy</h2>
              </div>
              
              <p className="text-gray-300 leading-relaxed">
                We believe that great food is more than just taste—it's an experience that engages 
                all the senses. Every ingredient is carefully selected, every technique perfected, 
                and every presentation crafted to create moments that last a lifetime.
              </p>
              
              <p className="text-gray-300 leading-relaxed">
                Our commitment to excellence drives us to constantly innovate while respecting 
                traditional culinary arts. We source locally, cook sustainably, and serve with 
                genuine passion.
              </p>
            </div>

            {/* Features Grid */}
            <div className="grid sm:grid-cols-2 gap-4">
              {features.map((feature, index) => (
                <div
                  key={index}
                  className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-6 hover:bg-white/10 transition-all duration-300 group"
                >
                  <div className="text-orange-400 mb-3 transform group-hover:scale-110 transition-transform">
                    {feature.icon}
                  </div>
                  <h3 className="text-white font-semibold mb-2">{feature.title}</h3>
                  <p className="text-gray-400 text-sm">{feature.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom CTA Section */}
        <div className="bg-gradient-to-r from-orange-500/10 to-amber-500/10 backdrop-blur-xl border border-white/10 rounded-3xl p-8 md:p-12 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Ready to Experience the Difference?
          </h2>
          <p className="text-gray-300 text-lg mb-8 max-w-2xl mx-auto">
            Join us for an unforgettable culinary journey. Reserve your table today and 
            discover why our guests keep coming back.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="#reservation">
              <button className="group relative bg-gradient-to-r from-orange-500 to-amber-500 text-white font-bold px-8 py-4 rounded-full overflow-hidden transition-all duration-300 transform hover:scale-105 hover:shadow-2xl hover:shadow-orange-500/50">
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
                View Our Menu
              </button>
            </a>
          </div>
        </div>
      </div>

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
}

export default AboutUs;