import React from "react";
import { useParams } from "react-router-dom";

const CarDetails = () => {
  const { id } = useParams();
  
  return (
    <div>
      <h2>Car Details - ID: {id}</h2>
      <p>More details about the car will go here.</p>
    </div>
  );
};

export default CarDetails;
