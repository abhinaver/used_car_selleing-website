import React from "react";
import { Link, useNavigate } from "react-router-dom";
import logo from "../assets/logo.png";
import "./Header.css";

const Header = ({ searchQuery, setSearchQuery }) => {  // Accept props
  const navigate = useNavigate();

  const handleSearch = (e) => {
    e.preventDefault();
    console.log("Searching for:", searchQuery);
    navigate("/");  // Redirect to home if not already there
  };

  return (
    <nav className="navbar">
      <div className="logo-container">
        <img src={logo} alt="Used Car Marketplace Logo" className="logo-img" onClick={() => navigate("/")} />
      </div>

      <form className="search-bar" onSubmit={handleSearch}>
        <input
          type="text"
          placeholder="Search for cars..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}  // Update search state
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
