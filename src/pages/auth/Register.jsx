import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";

const Register = ({ setActivePage }) => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    conPassword: "",
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    let validationErrors = {};

    // Validate input fields
    if (!formData.firstName.trim())
      validationErrors.firstName = "First name is required";
    if (!formData.lastName.trim())
      validationErrors.lastName = "Last name is required";
    if (!formData.email.trim()) validationErrors.email = "Email is required";
    if (!formData.password.trim())
      validationErrors.password = "Password is required";
    if (!formData.conPassword.trim())
      validationErrors.conPassword = "Confirm password is required";
    if (formData.password !== formData.conPassword) {
      validationErrors.conPassword = "Passwords do not match";
    }

    setErrors(validationErrors);

    // If there are validation errors, return early
    if (Object.keys(validationErrors).length > 0) return;

    try {
      // Send data to backend
      const response = await fetch("http://localhost:5000/registration", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          firstName: formData.firstName,
          lastName: formData.lastName,
          email: formData.email,
          password: formData.password,
          confirmPassword: formData.conPassword,
        }),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || "Registration failed");
      }

      alert("Registration successful!");
      setActivePage("login"); // Redirect to login page after success
    } catch (error) {
      setErrors({ general: error.message });
    }
  };

  return (
    <>
      <div className="d-flex justify-content-center align-items-center vh-100 bg-light">
        <div className="card p-4 shadow-sm" style={{ width: "25rem" }}>
          <h2 className="text-center mb-4">Register</h2>
          <form onSubmit={handleSubmit}>
            <div className="mb-3">
              <label className="form-label">First Name</label>
              <input
                type="text"
                name="firstName"
                value={formData.firstName}
                onChange={handleChange}
                className="form-control"
              />
              {errors.firstName && (
                <div className="text-danger small">{errors.firstName}</div>
              )}
            </div>
            <div className="mb-3">
              <label className="form-label">Last Name</label>
              <input
                type="text"
                name="lastName"
                value={formData.lastName}
                onChange={handleChange}
                className="form-control"
              />
              {errors.lastName && (
                <div className="text-danger small">{errors.lastName}</div>
              )}
            </div>
            <div className="mb-3">
              <label className="form-label">Email</label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="form-control"
              />
              {errors.email && (
                <div className="text-danger small">{errors.email}</div>
              )}
            </div>
            <div className="mb-3">
              <label className="form-label">Password</label>
              <input
                type="password"
                name="password"
                value={formData.password}
                onChange={handleChange}
                className="form-control"
              />
              {errors.email && (
                <div className="text-danger small">{errors.password}</div>
              )}
            </div>
            <div className="mb-3">
              <label className="form-label">Confirm Password</label>
              <input
                type="password"
                name="conPassword"
                value={formData.conPassword}
                onChange={handleChange}
                className="form-control"
              />
              {errors.email && (
                <div className="text-danger small">{errors.password}</div>
              )}
            </div>
            <button type="submit" className="btn btn-primary w-100">
              Register
            </button>
            <p>
              Already have an acoount? Login{" "}
              <span onClick={() => setActivePage("login")}>Here</span>.
            </p>
          </form>
        </div>
      </div>
    </>
  );
};

export default Register;
