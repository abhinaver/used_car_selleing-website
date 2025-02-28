import React, { useState } from "react";
import "./SellCar.css"; // Import the CSS file

const SellCar = () => {
  const [carData, setCarData] = useState({
    name: "",
    price: "",
    phone: "",
    description: "",
    image: null,
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setCarData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    setCarData((prevData) => ({ ...prevData, image: URL.createObjectURL(file) }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Car listed successfully!");
    console.log(carData);
  };

  return (
    <div className="sell-car-container">
      <h2>Sell Your Car</h2>
      <form onSubmit={handleSubmit} className="sell-car-form">
        {/* Image Upload */}
        <label className="file-input">
          <input type="file" accept="image/*" onChange={handleImageChange} />
        </label>
        {carData.image && <img src={carData.image} alt="Car Preview" className="preview-image" />}

        {/* Car Name */}
        <input type="text" name="name" placeholder="Car Name" value={carData.name} onChange={handleChange} required />

        {/* Price */}
        <input type="number" name="price" placeholder="Price (₹)" value={carData.price} onChange={handleChange} required />

        {/* Phone Number */}
        <input type="tel" name="phone" placeholder="Phone Number" value={carData.phone} onChange={handleChange} required />

        {/* Description */}
        <textarea name="description" placeholder="Description" value={carData.description} onChange={handleChange} required></textarea>

        {/* Submit Button */}
        <button type="submit" className="submit-button">List Car</button>
      </form>
    </div>
  );
};

export default SellCar;
