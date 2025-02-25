import React from "react";
import CarCard from "../components/CarCard";


const cars = [
  { name: "Honda City", price: "7,50,000", year: "2020", image: "car1.jpg" },
  { name: "Maruti Swift", price: "5,00,000", year: "2019", image: "car2.jpg" },
  { name: "Toyota Fortuner", price: "35,00,000", year: "2021", image: "car3.jpg" },
];

const Home = () => {
  return (
    <div style={{ display: "flex", flexWrap: "wrap", justifyContent: "center" }}>
      {cars.map((car, index) => (
        <CarCard key={index} car={car} />
      ))}
    </div>
  );
};

export default Home;
