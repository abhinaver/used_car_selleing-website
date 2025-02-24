import React from "react";
import { useState } from "react";
import CarCard from "../components/CarCard";

const Home = () => {
  const [cars] = useState([
    { id: 1, model: "Toyota Corolla", price: 12000, image: "car1.jpg" },
    { id: 2, model: "Honda Civic", price: 15000, image: "car2.jpg" },
  ]);

  return (
    <div>
      <h1>Available Cars</h1>
      <div className="car-list">
        {cars.map((car) => (
          <CarCard key={car.id} car={car} />
        ))}
      </div>
    </div>
  );
};

export default Home;
