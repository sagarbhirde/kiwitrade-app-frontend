import React from "react";
import "./Header.css";

const Header: React.FC = () => {
  return (
    <header className="header">
      <div className="header-container">
        {/* Top Section */}
        <div className="header-top">
          <div className="contact-info">
            <span>📧 info@example.com</span>
            <span>📞 Customer support</span>
          </div>
          <div className="actions">
            <button className="post-ad">POST Ad</button>
            <button className="language">🌍 Language</button>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="header-bottom">
          <div className="logo-section">
            <h1>
              <span className="pro">PRO</span>
              <span className="Trader">Trader</span>
            </h1>
            <p className="bottom-logo">Trade Like A Real Pro</p>
          </div>

          <div className="stats">
            <div className="ad-stats">
              <span className="digit">4</span>
              <span className="digit">3</span>,<span className="digit">1</span>
              <span className="digit">2</span>
              <span className="digit">5</span>
              <span className="label">Ads</span>
            </div>
          </div>

          <div className="search-section">
            <input
              type="text"
              className="search-input"
              placeholder="Search your product..."
            />
            <button className="search-button">🔍</button>
          </div>

          <div className="account-section">
            <button className="account-button">👤 My Account</button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
