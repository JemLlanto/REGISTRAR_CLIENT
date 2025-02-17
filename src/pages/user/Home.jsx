import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Button } from "react-bootstrap"; // Import Bootstrap Button

export default function Sidebar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="d-flex">
      {/* Sidebar */}
      <div
        className={` text-white p-4 position-fixed vh-100 ${
          isOpen ? "w-250" : "w-0"
        } transition`}
        style={{
          backgroundColor: "#003d7a",
          width: isOpen ? "250px" : "0",
          overflowX: "hidden",
          transition: "0.3s",
        }}
      >
        <Button
          variant="light"
          className="mb-3"
          onClick={() => setIsOpen(false)}
        >
          ✖
        </Button>
        <h4>Sidebar Menu</h4>
        <ul className="list-unstyled">
          <li className="py-2">
            <a href="#" className="text-white text-decoration-none">
              Home
            </a>
          </li>
          <li className="py-2">
            <a href="#" className="text-white text-decoration-none">
              About
            </a>
          </li>
          <li className="py-2">
            <a href="#" className="text-white text-decoration-none">
              Services
            </a>
          </li>
          <li className="py-2">
            <a href="#" className="text-white text-decoration-none">
              Contact
            </a>
          </li>
        </ul>
      </div>

      {/* Open Sidebar Button */}
      <Button
        variant="dark"
        className="m-3"
        onClick={() => setIsOpen(true)}
        style={{
          position: "fixed",
          left: isOpen ? "150px" : "5px",
          transition: "0.3s",
          top: "8px",
        }}
      >
        ☰
      </Button>
    </div>
  );
}
