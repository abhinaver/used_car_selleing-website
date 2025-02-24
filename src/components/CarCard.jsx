import React from "react";
import { Link } from "react-router-dom";

const CarCard = ({ car }) => {
  return (
    <div className="car-card">
      <img src={car.image} alt={car.model} />
      <h3>{car.model}</h3>
      <p>Price: ${car.price}</p>
      <Link to={`/car/${car.id}`}>View Details</Link>
    </div>
  );
};

export default CarCard;
