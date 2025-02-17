import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "bootstrap";
import "react-bootstrap";

// USER ROUTES
import Index from "./pages/auth/Index";
import Home from "./pages/user/Home";
// ADMIN ROUTES

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Index />} />
        <Route path="/Home" element={<Home />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
