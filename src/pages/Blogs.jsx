// Blogs.js
import React, { useState } from 'react';
import { blogPosts } from "../data/data"; // Importing the data file

const Blogs = () => {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');

  const categories = ['All', ...new Set(blogPosts.map(post => post.category))];

  const filteredPosts = blogPosts.filter(post => {
    const matchesCategory = selectedCategory === 'All' || post.category === selectedCategory;
    const matchesSearch = post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         post.description.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const categoryColors = {
    'Recipes': 'bg-orange-500/20 text-orange-400 border-orange-500/30',
    'Cooking Tips': 'bg-blue-500/20 text-blue-400 border-blue-500/30',
    'Health': 'bg-green-500/20 text-green-400 border-green-500/30',
    'Sustainability': 'bg-emerald-500/20 text-emerald-400 border-emerald-500/30',
  };

  return (
    <div className="relative bg-gradient-to-br from-gray-900 via-gray-800 to-black text-white min-h-screen overflow-hidden">
      
      {/* Animated Background */}
      <div className="absolute inset-0 opacity-20 pointer-events-none">
        <div className="absolute top-20 right-20 w-96 h-96 bg-orange-500 rounded-full blur-3xl animate-pulse-slow"></div>
        <div className="absolute bottom-20 left-20 w-96 h-96 bg-amber-500 rounded-full blur-3xl animate-pulse-delayed"></div>
      </div>

      {/* Grid Pattern */}
      <div className="absolute inset-0 opacity-5" style={{
        backgroundImage: `linear-gradient(rgba(255,255,255,.05) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.05) 1px, transparent 1px)`,
        backgroundSize: '50px 50px'
      }}></div>

      <div className="relative z-10 container mx-auto px-4 py-20">
        
        {/* Header Section */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-orange-500/10 backdrop-blur-sm border border-orange-500/20 rounded-full px-6 py-2 mb-6">
            <span className="w-2 h-2 bg-orange-400 rounded-full animate-pulse"></span>
            <span className="text-orange-400 text-sm font-medium tracking-wider">CULINARY INSIGHTS</span>
          </div>
          
          <h1 className="text-5xl md:text-7xl font-bold mb-6">
            <span className="bg-gradient-to-r from-white via-orange-100 to-amber-200 bg-clip-text text-transparent">
              Stories & Recipes
            </span>
            <br />
            <span className="text-white">From Our Kitchen</span>
          </h1>
          
          <p className="text-gray-400 text-lg max-w-2xl mx-auto mb-8">
            Explore culinary tips, health insights, and behind-the-scenes stories from our passionate team
          </p>

          {/* Search Bar */}
          <div className="max-w-xl mx-auto mb-8">
            <div className="relative">
              <input
                type="text"
                placeholder="Search articles..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full px-6 py-4 bg-white/5 backdrop-blur-xl border border-white/10 rounded-full text-white placeholder-gray-400 focus:outline-none focus:border-orange-500 focus:ring-2 focus:ring-orange-500/20 transition-all"
              />
              <svg className="absolute right-6 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
            </div>
          </div>

          {/* Category Filter */}
          <div className="flex flex-wrap justify-center gap-3">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-6 py-2 rounded-full font-medium transition-all duration-300 ${
                  selectedCategory === category
                    ? 'bg-gradient-to-r from-orange-500 to-amber-500 text-white shadow-lg shadow-orange-500/30 scale-105'
                    : 'bg-white/5 border border-white/10 text-gray-300 hover:bg-white/10 hover:border-orange-500/30'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>

        {/* Blog Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredPosts.map((post, index) => (
            <article
              key={index}
              className="group bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl overflow-hidden hover:border-orange-500/50 transition-all duration-500 hover:shadow-2xl hover:shadow-orange-500/20 hover:-translate-y-2"
            >
              {/* Image Container */}
              <div className="relative h-56 overflow-hidden">
                <img 
                  src={post.image} 
                  alt={post.title} 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                
                {/* Category Badge */}
                <div className={`absolute top-4 left-4 px-4 py-1 rounded-full text-sm font-semibold backdrop-blur-md border ${categoryColors[post.category] || 'bg-gray-500/20 text-gray-400 border-gray-500/30'}`}>
                  {post.category}
                </div>
              </div>

              {/* Content */}
              <div className="p-6 space-y-4">
                {/* Meta Info */}
                <div className="flex items-center gap-4 text-sm text-gray-400">
                  <div className="flex items-center gap-1">
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                    </svg>
                    <span>{post.date}</span>
                  </div>
                  {post.readTime && (
                    <div className="flex items-center gap-1">
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                      <span>{post.readTime}</span>
                    </div>
                  )}
                </div>

                {/* Title */}
                <h2 className="text-xl font-bold text-white group-hover:text-orange-400 transition-colors line-clamp-2">
                  {post.title}
                </h2>

                {/* Description */}
                <p className="text-gray-400 text-sm line-clamp-3">
                  {post.description}
                </p>

                {/* Author & CTA */}
                <div className="flex items-center justify-between pt-4 border-t border-white/10">
                  {post.author && (
                    <div className="flex items-center gap-2">
                      <div className="w-8 h-8 bg-gradient-to-br from-orange-500 to-amber-500 rounded-full flex items-center justify-center text-white text-sm font-bold">
                        {post.author.charAt(0)}
                      </div>
                      <span className="text-sm text-gray-400">{post.author}</span>
                    </div>
                  )}
                  
                  <button className="group/btn flex items-center gap-2 text-orange-400 font-semibold text-sm hover:gap-3 transition-all ml-auto">
                    Read More
                    <svg className="w-4 h-4 transition-transform group-hover/btn:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </button>
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* No Results Message */}
        {filteredPosts.length === 0 && (
          <div className="text-center py-20">
            <div className="w-20 h-20 bg-orange-500/10 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg className="w-10 h-10 text-orange-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <h3 className="text-2xl font-bold text-white mb-2">No articles found</h3>
            <p className="text-gray-400">Try adjusting your search or filter to find what you're looking for</p>
          </div>
        )}

        {/* Newsletter CTA */}
        <div className="mt-20 bg-gradient-to-r from-orange-500/20 to-amber-500/20 backdrop-blur-xl border border-orange-500/30 rounded-3xl p-12 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Never Miss a Recipe
          </h2>
          <p className="text-gray-300 text-lg mb-8 max-w-2xl mx-auto">
            Subscribe to our newsletter and get the latest culinary insights, recipes, and special offers delivered to your inbox.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 max-w-xl mx-auto">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-6 py-4 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full text-white placeholder-gray-400 focus:outline-none focus:border-orange-500 focus:ring-2 focus:ring-orange-500/20 transition-all"
            />
            <button className="group relative bg-gradient-to-r from-orange-500 to-amber-500 text-white font-bold px-8 py-4 rounded-full overflow-hidden transition-all duration-300 transform hover:scale-105 hover:shadow-2xl hover:shadow-orange-500/50">
              <span className="relative z-10 flex items-center justify-center gap-2">
                Subscribe
                <svg className="w-5 h-5 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </span>
              <div className="absolute inset-0 bg-gradient-to-r from-amber-500 to-orange-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </button>
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
        
        .line-clamp-2 {
          display: -webkit-box;
          -webkit-line-clamp: 2;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }
        
        .line-clamp-3 {
          display: -webkit-box;
          -webkit-line-clamp: 3;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }
      `}</style>
    </div>
  );
};

export default Blogs;