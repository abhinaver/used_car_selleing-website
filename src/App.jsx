import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import CarDetails from "./pages/CarDetails";
import SellCar from "./pages/SellCar";
import Login from "./pages/Login"; // Import Login Page
import Header from "./components/Header";
import Footer from "./components/Footer";
import Signup from "./pages/Signup";

const App = () => {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/car/:id" element={<CarDetails />} />
        <Route path="/sell" element={<SellCar />} />
        <Route path="/login" element={<Login />} /> {/* New Route for Login */}
        <Route path="/Signup" element={<Signup/>} />
      </Routes>
      <Footer />
    </Router>
  );
};

export default App;
