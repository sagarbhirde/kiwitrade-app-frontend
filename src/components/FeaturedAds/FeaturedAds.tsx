import React, { useState } from "react";

const ads = [
  {
    id: 1,
    title: "Performance on empowering prime your drive.",
    imageUrl:
      "http://ts3.mm.bing.net/th?id=OIP.7_xrtxsQQHiZO1dHBNkWLQHaEo&pid=15.1",
    bid: "$4,648.00",
    category: "AUTOMOTIVE",
  },
  {
    id: 2,
    title: "Artistry Auctions Discovering New Masterpieces.",
    imageUrl:
      "https://th.bing.com/th?id=OIP.7KxS1dD9raUgEIvb1XviUgHaEo&w=316&h=197&c=8&rs=1&qlt=90&o=6&pid=3.1&rm=2",
    bid: "$2,798.00",
    category: "COMICS",
  },
  {
    id: 3,
    title: "Palette on Perfection Primer Art Auction Event.",
    imageUrl:
      "https://th.bing.com/th?id=OIP.irym6duoMbEtcEUcJefPIAHaE8&w=305&h=204&c=8&rs=1&qlt=90&o=6&pid=3.1&rm=2",
    bid: "$4,648.00",
    category: "COMICS",
  },
  {
    id: 4,
    title: "Illustrate Masterpiece Deluxe Edition House",
    imageUrl:
      "https://th.bing.com/th/id/OIP.vEyJa4SGP6jR4Pdne--XNQHaE8?w=242&h=180&c=7&r=0&o=5&pid=1.7",
    bid: "$2,855.00",
    category: "ANTIQUES",
  },
  {
    id: 5,
    title: "Canvas Celebration Art SpectacularEvent",
    imageUrl:
      "https://th.bing.com/th/id/OIP.JQoww2WwY_cs6Zr3Iq4W2gHaGB?w=234&h=189&c=7&r=0&o=5&pid=1.7",
    bid: "$5,237.00",
    category: "COMICS",
  },
  {
    id: 6,
    title: "Rare Find The KingFlok Restaurant",
    imageUrl:
      "https://th.bing.com/th/id/OIP.3xY8kvQ9B2sn2Er8TPAlLgHaEK?w=286&h=180&c=7&r=0&o=5&pid=1.7",
    bid: "$2,898.00",
    category: "DIGITAL ART",
  },
];

const FeaturedAds = () => {
  const [selectedCategory, setSelectedCategory] = useState("ALL");

  const handleCategoryClick = (category: React.SetStateAction<string>) => {
    setSelectedCategory(category);
  };

  const filteredAds =
    selectedCategory === "ALL"
      ? ads
      : ads.filter((ad) => ad.category === selectedCategory);

  return (
    <section className="me-auto p-6 max-w-6xl">
      <h2 className="text-3xl font-bold text-left">
        Featured Ads
        <span className="italic text-gray-500 font-normal font-playfair"> for you...</span>
      </h2>
      <p className="text-gray-600 mt-2 text-left">
        Feel free to adapt this based on the specific managed services, features.
      </p>
      <div className="space-x-24 mt-4 flex">
        {[
          "ALL",
          "ANTIQUES",
          "AUTOMOTIVE",
          "COMICS",
          "DIGITAL ART",
        ].map((category) => (
          <button
            key={category}
            className={`px-4 py-2 text-gray-500 hover:text-green-500 transition-colors duration-200 rounded-md border ${
              selectedCategory === category
                ? "font-semibold text-green-500 border-green-500"
                : "border-gray-300"
            }focus:bg-gray-100 focus:outline-none focus:ring-0 border-none`}
            onClick={() => handleCategoryClick(category)}
          >
            {category}
          </button>
        ))}
      </div>
      <hr className="mt-6 mb-6 border-gray-400" />
      <div className="grid grid-cols-1 md:grid-cols-2 gap-x-32 gap-y-6 mt-6 sm:grid-cols-2 lg:grid-cols-2 sm:p-8">
        {filteredAds.map((ad) => (
          <div
            key={ad.id}
            className="flex flex-col bg-white overflow-hidden border rounded-lg shadow-sm sm:flex-row"
          >
            <div className="w-full h-48 sm:h-64 relative">
              <img
                src={ad.imageUrl}
                alt={ad.title}
                className="w-full h-full object-cover"
              />
              <span className="absolute top-2 left-2 bg-blue-500 text-white text-xs px-2 py-1 rounded">
                Upcoming
              </span>
            </div>
            <div className="w-full p-4 sm:w-2/3 text-left">
              <h3 className="text-lg font-semibold mt-0 mb-2">{ad.title}</h3>
              <p className="text-sm text-gray-500">Starting bid:</p>
              <p className="text-lg font-bold mb-3">{ad.bid}</p>
              <button className="mt-4 bg-black text-white px-8 py-1 rounded">
                View Ad
              </button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default FeaturedAds;
