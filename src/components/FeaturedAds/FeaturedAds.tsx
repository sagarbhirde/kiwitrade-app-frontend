import React, { useState } from "react";

const ads = [
  {
    id: 1,
    title: "Performance on empowering prime your drive.",
    imageUrl: "https://th.bing.com/th/id/OIP.vEyJa4SGP6jR4Pdne--XNQHaE8?w=242&h=180&c=7&r=0&o=5&pid=1.7",
    bid: "$4,648.00",
    category: "AUTOMOTIVE",
  },
  {
    id: 2,
    title: "Artistry Auctions Discovering New Masterpieces.",
    imageUrl: "https://th.bing.com/th/id/OIP.vEyJa4SGP6jR4Pdne--XNQHaE8?w=242&h=180&c=7&r=0&o=5&pid=1.7",
    bid: "$2,798.00",
    category: "COMICS",
  },
  {
    id: 3,
    title: "Palette on Perfection Primer Art Auction Event.",
    imageUrl: "https://th.bing.com/th/id/OIP.vEyJa4SGP6jR4Pdne--XNQHaE8?w=242&h=180&c=7&r=0&o=5&pid=1.7",
    bid: "$4,648.00",
    category: "COMICS",
  },
  {
    id: 4,
    title: "Illustrate Masterpiece Edition House",
    imageUrl: "https://th.bing.com/th/id/OIP.vEyJa4SGP6jR4Pdne--XNQHaE8?w=242&h=180&c=7&r=0&o=5&pid=1.7",
    bid: "$2,855.00",
    category: "ANTIQUES",
  },
  {
    id: 5,
    title: "Canvas Celebration Art Spectacular Event",
    imageUrl: "https://th.bing.com/th/id/OIP.vEyJa4SGP6jR4Pdne--XNQHaE8?w=242&h=180&c=7&r=0&o=5&pid=1.7",
    bid: "$5,237.00",
    category: "COMICS",
  },
  {
    id: 6,
    title: "Rare Find The KingFlok Restaurant",
    imageUrl: "https://th.bing.com/th/id/OIP.vEyJa4SGP6jR4Pdne--XNQHaE8?w=242&h=180&c=7&r=0&o=5&pid=1.7",
    bid: "$2,898.00",
    category: "DIGITAL ART",
  },
  ];

const FeaturedAds = () => {
  const [selectedCategory, setSelectedCategory] = useState("ALL");

  const handleCategoryClick = (category: React.SetStateAction<string>) => {
    setSelectedCategory(category);
  };

  // Filter ads based on the selected category
  const filteredAds = selectedCategory === "ALL" ? ads : ads.filter(ad => ad.category === selectedCategory);

  return (
    <section className="container mx-auto p-6">
      <h2 className="text-3xl font-bold">
        Featured Ads <span className="italic text-gray-500 font-normal font-playfair">for you...</span>
      </h2>
      <p className="text-gray-600 mt-2">
        Feel free to adapt this based on the specific managed services, features.
      </p>
      <div className="flex space-x-4 mt-4">
        <button
          className={`text-gray-500 hover:text-green-500 ${selectedCategory === "ALL" ? "text-green-500 font-semibold" : ""}`}
          onClick={() => handleCategoryClick("ALL")}
        >
          SHOW ALL
        </button>
        <button
          className={`text-gray-500 hover:text-green-500 ${selectedCategory === "ANTIQUES" ? "text-green-500 font-semibold" : ""}`}
          onClick={() => handleCategoryClick("ANTIQUES")}
        >
          ANTIQUES
        </button>
        <button
          className={`text-gray-500 hover:text-green-500 ${selectedCategory === "AUTOMOTIVE" ? "text-green-500 font-semibold" : ""}`}
          onClick={() => handleCategoryClick("AUTOMOTIVE")}
        >
          AUTOMOTIVE
        </button>
        <button
          className={`text-gray-500 hover:text-green-500 ${selectedCategory === "COMICS" ? "text-green-500 font-semibold" : ""}`}
          onClick={() => handleCategoryClick("COMICS")}
        >
          COMICS
        </button>
        <button
          className={`text-gray-500 hover:text-green-500 ${selectedCategory === "DIGITAL ART" ? "text-green-500 font-semibold" : ""}`}
          onClick={() => handleCategoryClick("DIGITAL ART")}
        >
          DIGITAL ART
        </button>
      </div>

      <div className="grid grid-cols-2 gap-6 mt-6">
        {filteredAds.map((ad) => (
          <div key={ad.id} className="border p-4 rounded-lg shadow-lg">
            <span className="bg-blue-500 text-white text-xs px-2 py-1 rounded">
              🔵 Upcoming
            </span>
            <img
              src={ ad.imageUrl} // Ensure the image property is being used properly
              alt={ad.title}
              className="w-full h-40 object-cover mt-2 rounded"
            />
            <h3 className="text-lg font-semibold mt-2">{ad.title}</h3>
            <p className="text-lg font-bold mt-2">{ad.bid}</p>
            <button className="mt-4 bg-black text-white px-4 py-2 rounded">
              View Ad
            </button>
          </div>
        ))}
      </div>
    </section>
  );
};

export default FeaturedAds;
