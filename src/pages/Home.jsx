import React from "react";
import CarCard from "../components/CarCard";
import civic from "../assets/cars/civic.jpg";
import corolla from "../assets/cars/corolla.jpeg";
import mustang from "../assets/cars/mustang.jpeg";
import tesla from "../assets/cars/tesla.jpeg";
import bmw from "../assets/cars/bmw.jpeg";
import audi from "../assets/cars/audi.jpeg";
import mercedes from "../assets/cars/mercedes.jpeg";
import camaro from "../assets/cars/camaro.jpeg";
import elantra from "../assets/cars/elantra.jpeg";
import mazda from "../assets/cars/mazda.jpeg";
import altima from "../assets/cars/altima.jpeg";
import sportage from "../assets/cars/sportage.jpeg";





const cars = [
  { id: 1, name: "Honda Civic", price: "$15,000", image: civic },
  { id: 2, name: "Toyota Corolla", price: "$14,000", image: corolla },
  { id: 3, name: "Ford Mustang", price: "$30,000", image: mustang },
  { id: 4, name: "Tesla Model 3", price: "$35,000", image: tesla },
  { id: 5, name: "BMW X5", price: "$50,000", image: bmw },
  { id: 6, name: "Audi A6", price: "$45,000", image: audi },
  { id: 7, name: "Mercedes C-Class", price: "$40,000", image: mercedes },
  { id: 8, name: "Chevrolet Camaro", price: "$32,000", image: camaro},
  { id: 9, name: "Hyundai Elantra", price: "$18,000", image: elantra },
  { id: 10, name: "Mazda CX-5", price: "$27,000", image: mazda },
  { id: 11, name: "Nissan Altima", price: "$22,000", image: altima },
  { id: 12, name: "Kia Sportage", price: "$26,000", image: sportage },
];

const Home = () => {
  return (
    <div style={{ display: "flex", flexWrap: "wrap", justifyContent: "center" }}>
      {cars.map((car, index) => (
        <CarCard key={car.id} car={car} />
      ))}
      
    </div>
  );
};

export default Home;
