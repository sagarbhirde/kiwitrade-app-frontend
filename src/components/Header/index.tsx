import React from "react";

const Header: React.FC = () => {
  return (
    <header className="bg-white shadow w-full">
      {/* Full-width container */}
      <div className="w-full">
        {/* Top Section */}
        <div className="flex justify-between items-center text-sm text-gray-700 border-b border-gray-200 py-2 p-8">
          <div className="flex space-x-8">
            <span>📧 info@example.com</span>
            <span>📞 Customer support</span>
          </div>
          <div className="flex space-x-4">
            <button className="px-4 py-2 text-black border border-black rounded-full hover:bg-black hover:text-white transition">
              POST Ad
            </button>
            <button className="px-4 py-2 text-black border border-black rounded-full hover:bg-black hover:text-white transition">
              🌍 Language
            </button>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="flex flex-wrap items-center gap-8 py-4 p-14">
          {/* Logo Section */}
          <div>
            <h1 className="text-2xl font-bold">
              <span className="text-black">PRO</span>
              <span className="font-light">Trader</span>
            </h1>
            <p className="text-sm text-gray-500">Trade Like A Real Pro</p>
          </div>

          {/* Stats Section */}
          <div className="text-green-800 font-bold text-lg px-4 py-2">
            <div className="flex items-center space-x-1">
              <span className="bg-green-500 text-white px-2 py-1 rounded">4</span>
              <span className="bg-green-500 text-white px-2 py-1 rounded">3</span>,
              <span className="bg-green-500 text-white px-2 py-1 rounded">1</span>
              <span className="bg-green-500 text-white px-2 py-1 rounded">2</span>
              <span className="bg-green-500 text-white px-2 py-1 rounded">5</span>
              <span className="text-gray-600 text-base ml-2">Ads</span>
            </div>
          </div>

          {/* Search Section */}
          <div className="flex flex-1 border border-gray-300 overflow-hidden rounded">
            <input
              type="text"
              className="flex-1 px-4 py-2 text-gray-700 outline-none"
              placeholder="Search your product..."
            />
            <button className="bg-green-500 text-white px-4 py-2 hover:bg-green-600 transition">
              🔍
            </button>
          </div>

          {/* Account Section */}
          <div>
            <button className="px-4 py-2 bg-black text-white border border-black rounded hover:bg-white hover:text-black transition">
              👤 My Account
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
