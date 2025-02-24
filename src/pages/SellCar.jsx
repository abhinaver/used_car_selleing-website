import React, { useState } from "react";

const SellCar = () => {
  const [car, setCar] = useState({ model: "", price: "" });

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Car listed:", car);
  };

  return (
    <div>
      <h2>Sell Your Car</h2>
      <form onSubmit={handleSubmit}>
        <input type="text" placeholder="Car Model" onChange={(e) => setCar({ ...car, model: e.target.value })} />
        <input type="number" placeholder="Price" onChange={(e) => setCar({ ...car, price: e.target.value })} />
        <button type="submit">List Car</button>
      </form>
    </div>
  );
};

export default SellCar;
