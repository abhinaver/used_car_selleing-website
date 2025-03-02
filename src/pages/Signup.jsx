import React, { useState } from "react";
import { AiOutlineUser, AiOutlineMail, AiOutlineLock } from "react-icons/ai";
import "./Signup.css";

const Signup = () => {
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const [errors, setErrors] = useState({});
  
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const validate = () => {
    const newErrors = {};
    if (!formData.username) newErrors.username = "Username is required.";
    if (!formData.email) newErrors.email = "Email is required.";
    if (!formData.password) newErrors.password = "Password is required.";
    if (formData.password !== formData.confirmPassword) {
      newErrors.confirmPassword = "Passwords do not match.";
    }
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validate()) {
      console.log("Form Submitted:", formData);
      alert("Signup Successful!");
      setFormData({
        username: "",
        email: "",
        password: "",
        confirmPassword: "",
      });
      setErrors({});
    }
  };

  return (
    <div className="signup-container">
      <h2>Sign Up</h2>
      <form onSubmit={handleSubmit} className="signup-form">
        {/* Username */}
        <div className="input-group">
          <AiOutlineUser className="icon" />
          <input
            type="text"
            name="username"
            placeholder="Username"
            value={formData.username}
            onChange={handleChange}
          />
        </div>
        {errors.username && <p className="error">{errors.username}</p>}

        {/* Email */}
        <div className="input-group">
          <AiOutlineMail className="icon" />
          <input
            type="email"
            name="email"
            placeholder="Email"
            value={formData.email}
            onChange={handleChange}
          />
        </div>
        {errors.email && <p className="error">{errors.email}</p>}

        {/* Password */}
        <div className="input-group">
          <AiOutlineLock className="icon" />
          <input
            type="password"
            name="password"
            placeholder="Password"
            value={formData.password}
            onChange={handleChange}
          />
        </div>
        {errors.password && <p className="error">{errors.password}</p>}

        {/* Confirm Password */}
        <div className="input-group">
          <AiOutlineLock className="icon" />
          <input
            type="password"
            name="confirmPassword"
            placeholder="Confirm Password"
            value={formData.confirmPassword}
            onChange={handleChange}
          />
        </div>
        {errors.confirmPassword && (
          <p className="error">{errors.confirmPassword}</p>
        )}

        {/* Submit Button */}
        <button type="submit" className="signup-button">
          Sign Up
        </button>
      </form>
    </div>
  );
};

export default Signup;
