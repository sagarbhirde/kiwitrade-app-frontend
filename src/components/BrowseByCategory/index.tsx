import React from "react";
import realEstate from "./../../../assets/images/realestate.jpg";
import './BrowseByCategory.css'

interface CategoryCardProps {
  title: string;
  adsCount: number;
  imageUrl: string;
}

const CategoryCard: React.FC<CategoryCardProps> = ({ title, imageUrl }) => {
  return (
    <div
      className="category-card"
      style={{ backgroundImage: `url(${imageUrl})` }}
    >
      <div className="overlay">
        <div className="bg">
          <h3>{title}</h3>
          {/* <p>{adsCount} </p> */}
        </div>
      </div>
    </div>
  );
};

const categories = [
  {
    title: "Real Estate",
    imageUrl: realEstate,
  },
  {
    title: "Cars & Boats",
    imageUrl: realEstate,
  },
  {
    title: "Industrial Jobs",
    imageUrl: realEstate,
  },
  {
    title: "Restaurants & Events",
    imageUrl: realEstate,
  },
  {
    title: "Buy & Sell",
    imageUrl: realEstate,
  },
  {
    title: "Community & Events",
    imageUrl: realEstate,
  },
];

const BrowseByCategory: React.FC = () => {
  return (
    <div className="browse-by-category">
      <h2>
        Browse By <span>Category</span>
      </h2>
      <p>
        Feel free to adapt this based on the specific managed services, features
      </p>
      <div className="categories-grid">
        {categories.map((category) => (
          <CategoryCard
            key={category.title}
            title={category.title}
            // adsCount={category.adsCount}
            imageUrl={category.imageUrl}
            adsCount={0}
          />
        ))}
      </div>
    </div>
  );
};

export default BrowseByCategory;
