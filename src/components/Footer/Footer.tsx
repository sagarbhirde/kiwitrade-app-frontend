
import React from "react";
import { FaLinkedin, FaFacebook, FaTwitter, FaInstagram } from "react-icons/fa"; // Import icons

const Footer: React.FC = () => {
  return (
    <footer className="bg-black text-white py-8 ">
      <div className="max-w-screen-xl mx-auto grid grid-cols-1 gap-8 md:grid-cols-4 ml-4 mr-4">
        {/* Category Section */}
        <div className="text-left">
          <h4 className="text-lg font-bold mb-4">Category</h4>
          <ul className="space-y-2">
            <li>Real Estate</li>
            <li>Cars & Boats</li>
            <li>Industrial Jobs</li>
            <li>Restaurants</li>
            <li>Events</li>
            <li>Services & Specials</li>
          </ul>
        </div>

        {/* Company Section */}
        <div className="text-left">
          <h4 className="text-lg font-bold mb-4">Company</h4>
          <ul className="space-y-2">
            <li>How to Post Ad with us</li>
            <li>How to Sell with us</li>
            <li>About Us</li>
            <li>F.A.Q</li>
            <li>Our Brand</li>
          </ul>
        </div>

        {/* Logo & Social Links */}
        <div className="text-left">
          <h4 className="text-xl font-bold mb-2">PROTrader</h4>
          <p className="text-sm mb-4">Trade Like A Real Pro</p>
          <p className="text-sm mb-2">Social Just You Connected Us!</p>
          <div className="flex gap-4">
            <a href="#" className="text-white flex flex-col items-center hover:text-blue-500">
              <FaLinkedin size={20} />
              <p className="text-xs font-light">LinkedIn</p>
            </a>
            <a href="#" className="text-white flex flex-col items-center hover:text-blue-600">
              <FaFacebook size={20} />
              <p className="text-xs font-light">Facebook</p>
            </a>
            <a href="#" className="text-white flex flex-col items-center hover:text-blue-400">
              <FaTwitter size={20} />
              <p className="text-xs font-light">Twitter</p>
            </a>
            <a href="#" className="text-white flex flex-col items-center hover:text-pink-500">
              <FaInstagram size={20} />
              <p className="text-xs font-light">Instagram</p>
            </a>
          </div>
        </div>

        {/* Newsletter Section */}
        <div className="text-left">
          <h4 className="text-lg font-bold mb-4">Join Our Newsletter & More Information.</h4>
          <div className="flex gap-2 mb-4">
            <input
              type="email"
              placeholder="Email Address"
              className="flex-1 px-3 py-2 border border-gray-700 bg-gray-800 text-white text-sm rounded"
            />
            <button className="px-4 py-2 bg-gray-700 hover:bg-gray-600 text-white rounded">&rarr;</button>
          </div>
          <h4 className="text-lg font-bold mb-2">Secured Payment Gateways</h4>
          <div className="flex gap-2">
            <span className="bg-gray-700 text-white text-xs px-3 py-1 rounded">Visa</span>
            <span className="bg-gray-700 text-white text-xs px-3 py-1 rounded">MasterCard</span>
            <span className="bg-gray-700 text-white text-xs px-3 py-1 rounded">Amex</span>
            <span className="bg-gray-700 text-white text-xs px-3 py-1 rounded">Discover</span>
          </div>
        </div>
      </div>

      <div className="border-t border-gray-700 mt-8 pt-4 text-sm">
  {/* Wrapper for All Content */}
  <div className="flex flex-col sm:flex-row justify-evenly items-center sm:items-center ">
    {/* Left Section - Copyright */}
    <p className="text-gray-400 text-center sm:text-left">
      &copy; Copyright 2024 <span className="font-bold text-white">ProTrader</span> | Design By
      <span className="font-bold text-white">DevKey</span>
    </p>

    {/* Right Section - Links */}
    <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 mt-4 sm:mt-0  ">
      <a href="#" className="text-gray-400 hover:underline">
        Support Center
      </a>
      <a href="#" className="text-gray-400 hover:underline">
        Terms & Conditions
      </a>
      <a href="#" className="text-gray-400 hover:underline">
        Privacy Policy
      </a>
    </div>
  </div>
</div>


    </footer>
  );
};

export default Footer;
