import { useState } from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  const handleClose = () => setOpen(false);

  return (
    <header className="navbar">
      <div className="logo ">Morya Aluminum & Glass</div>

      <nav className={`nav-links ${open ? "open" : ""}`}>
        <Link to="/" onClick={handleClose}>Home</Link>
        <Link to="/about" onClick={handleClose}>About</Link>
        <Link to="/services" onClick={handleClose}>Services</Link>
        <Link to="/contact" onClick={handleClose}>Contact</Link>
      </nav>

      <div
        className={`hamburger ${open ? "active" : ""}`}
        onClick={() => setOpen(!open)}
      >
        <span></span>
        <span></span>
        <span></span>
      </div>
    </header>
  );
}
