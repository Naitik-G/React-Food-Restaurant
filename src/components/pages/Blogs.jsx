import React, { useEffect } from 'react';
import Blog1 from "../../assets/Blog1.jpg";
import Blog2 from "../../assets/Blog2.jpg";
import Blog3 from "../../assets/Blog3.jpg";
import Blog4 from "../../assets/Blog4.jpg";

const Blogs = () => {
  useEffect(() => {
    // Scroll to the top of the page on component mount
    window.scrollTo(0, 0);
  }, []);

  const blogPosts = [
    {
      title: '5 Quick and Healthy Recipes You Can Make in 30 Minutes',
      description: 'Discover easy and delicious recipes that are perfect for a busy weeknight.',
      image: Blog1,
      category: 'Recipes',
      date: 'October 16, 2024',
    },
    {
      title: 'Cooking Tips for Beginners: How to Master the Basics',
      description: 'Learn essential cooking skills that will make you more confident in the kitchen.',
      image: Blog2,
      category: 'Cooking Tips',
      date: 'October 14, 2024',
    },
    {
      title: 'Health Benefits of Eating Organic Food',
      description: 'Explore the health advantages of incorporating organic food into your diet.',
      image: Blog3,
      category: 'Health',
      date: 'October 12, 2024',
    },
    {
      title: 'Sustainability in Our Kitchen: How We Reduce Waste',
      description: 'Learn about our sustainable practices and how we reduce food waste in our restaurant.',
      image: Blog4,
      category: 'Sustainability',
      date: 'October 10, 2024',
    },
  ];

  return (
    <div className="bg-gray-900 min-h-screen p-8">
      <h1 className="text-4xl font-bold text-center text-white mb-12">Our Blog</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {blogPosts.map((post, index) => (
          <div
            key={index}
            className="bg-gray-800 shadow-lg rounded-lg overflow-hidden hover:scale-105 transition-transform duration-300"
          >
            <img src={post.image} alt={post.title} className="w-full h-48 object-cover" />
            <div className="p-6">
              <span className="text-sm text-gray-400">{post.category} • {post.date}</span>
              <h2 className="text-xl font-semibold text-white mt-2">{post.title}</h2>
              <p className="text-gray-300 mt-2">{post.description}</p>
              <button className="mt-4 w-full bg-orange-500 hover:bg-orange-600 text-white py-2 rounded-lg">
                Read More
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Blogs;
