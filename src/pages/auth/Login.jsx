import React, { useState } from "react";

const Login = ({ setActivePage }) => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    let validationErrors = {};

    if (!formData.email.trim()) {
      validationErrors.email = "Email is required";
    } else if (
      !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(formData.email)
    ) {
      validationErrors.email = "Invalid email address";
    }

    setErrors(validationErrors);

    if (Object.keys(validationErrors).length === 0) {
      console.log("Form submitted", formData);
      alert("Registration successful!");
    }
  };
  return (
    <div className="d-flex justify-content-center align-items-center vh-100 bg-light">
      <div className="card p-4 shadow-sm" style={{ width: "25rem" }}>
        <h2 className="text-center mb-4">Login Page</h2>
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
          <button type="submit" className="btn btn-primary w-100">
            Register
          </button>
          <p>
            Register <span onClick={() => setActivePage("register")}>here</span>
            .
          </p>
        </form>
      </div>
    </div>
  );
};

export default Login;
