import React from "react";
import "./CarCard.css"; // Import the CSS file

const CarCard = ({ car }) => {
  return (
    <div className="car-card">
      <img src={car.image} alt={car.name} className="car-image" />
      <div className="car-details">
        <h2 className="car-name">{car.name}</h2>
        <p className="car-price">Price: ₹{car.price}</p>
        <p className="car-year">Year: {car.year}</p>
        <button className="view-button">View Details</button>
      </div>
    </div>
  );
};

export default CarCard;
