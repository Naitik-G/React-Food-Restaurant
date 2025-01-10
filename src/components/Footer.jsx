import React from "react";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-300 py-8">
      <div className="container mx-auto px-4">
        {/* Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Logo and Tagline */}
          <div>
            <h1 className="text-2xl font-bold text-white mb-4">[Restaurant Name]</h1>
            <p className="text-sm">
              Savor the taste of excellence, where every meal is an experience.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-4">Quick Links</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="#" className="hover:text-white transition">
                  Home
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition">
                  Menu
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition">
                  Reservations
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Newsletter Signup */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-4">Stay Updated</h3>
            <form>
              <input
                type="email"
                placeholder="Enter your email"
                className="w-full p-2 mb-4 bg-gray-800 text-gray-300 placeholder-gray-500 border border-gray-700 focus:outline-none focus:ring-2 focus:ring-gray-600 rounded"
              />
              <button
                type="submit"
                className="w-full bg-red-500 hover:bg-red-600 text-white font-semibold py-2 rounded transition"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="mt-8 text-center border-t border-gray-700 pt-4">
          <p className="text-sm">
            © {new Date().getFullYear()} [Restaurant Name]. All Rights Reserved.
          </p>
          <p className="text-sm mt-2">
            Built with ❤️ by [Your Name or Company].
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
