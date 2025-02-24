import React, { useState } from "react";
import { Link } from "react-router-dom";
import logo from "../assets/logo.png"; // Import the logo
import "./Header.css"; // Import styles

const Header = () => {
  const [searchQuery, setSearchQuery] = useState("");

  const handleSearch = (e) => {
    e.preventDefault();
    console.log("Searching for:", searchQuery);
    // Implement search functionality here
  };

  return (
    <nav className="navbar">
      <div className="logo-container">
        <img src={logo} alt="Used Car Marketplace Logo" className="logo-img" />
      </div>

      <form className="search-bar" onSubmit={handleSearch}>
        <input
          type="text"
          placeholder="Search for cars..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
        <button type="submit">Search</button>
      </form>

      <ul className="nav-links">
        <li><Link to="/">Home</Link></li>
        <li><Link to="/sell">Sell a Car</Link></li>
      </ul>
      
      <Link to="/login" className="login-button">Login</Link>
    </nav>
  );
};

export default Header;
