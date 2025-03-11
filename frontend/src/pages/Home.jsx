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
import "./Home.css";

const cars = [
  { id: 1, name: "Honda Civic", model: "Sedan", price: "15,000", image: civic },
  { id: 2, name: "Toyota Corolla", model: "Sedan", price: "14,000", image: corolla },
  { id: 3, name: "Ford Mustang", model: "Convertible", price: "30,000", image: mustang },
  { id: 4, name: "Tesla Model 3", model: "Sedan", price: "35,000", image: tesla },
  { id: 5, name: "BMW X5", model: "SUV", price: "50,000", image: bmw },
  { id: 6, name: "Audi A6", model: "Sedan", price: "45,000", image: audi },
  { id: 7, name: "Mercedes C-Class", model: "Sedan", price: "40,000", image: mercedes },
  { id: 8, name: "Chevrolet Camaro", model: "Convertible", price: "32,000", image: camaro },
  { id: 9, name: "Hyundai Elantra", model: "Sedan", price: "18,000", image: elantra },
  { id: 10, name: "Mazda CX-5", model: "SUV", price: "27,000", image: mazda },
  { id: 11, name: "Nissan Altima", model: "Sedan", price: "22,000", image: altima },
  { id: 12, name: "Kia Sportage", model: "SUV", price: "26,000", image: sportage },
];

// Temporary Hardcoded Most Demanded Cars
const mostDemandedCars = [
  { id: 5, name: "BMW X5", model: "SUV", price: "50,000", image: bmw },
  { id: 4, name: "Tesla Model 3", model: "Sedan", price: "35,000", image: tesla },
  { id: 3, name: "Ford Mustang", model: "Convertible", price: "30,000", image: mustang },
];


const Home = ({ searchQuery, selectedModel }) => {  // Accept searchQuery as prop, Accept selectedModel prop
  const filteredCars = cars.filter(car =>
    (!selectedModel || car.model === selectedModel) &&  // Filter by model if selected
    (car.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
    car.price.toLowerCase().includes(searchQuery.toLowerCase()) ||  // Search by price
    car.year?.toString().includes(searchQuery) ||                   // Search by year
    car.location?.toLowerCase().includes(searchQuery.toLowerCase()))  // Search by location
  );
  
  return (
    <div className="home-container">
      {/* Conditionally Render Most Demanded Cars Section */}
      {searchQuery.trim() === "" && (!selectedModel || selectedModel === "") && (
        <div className="most-demanded-section">
          <h2>Most Demanded Cars</h2>
          <div className="car-list">
            {mostDemandedCars.map((car) => (
              <CarCard key={car.id} car={car} />
            ))}
          </div>
        </div>
      )}

      <h2>Available Cars</h2>
      {filteredCars.length > 0 ? (
        <div className="car-list">
          {filteredCars.map((car) => (
            <CarCard key={car.id} car={car} />
          ))}
        </div>
      ) : (
        <p className="no-results">No cars found for "{searchQuery}"</p>
      )}
    </div>
  );
};

export default Home;
