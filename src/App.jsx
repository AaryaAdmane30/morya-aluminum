import { BrowserRouter, Routes, Route } from "react-router-dom";
import { FaWhatsapp } from "react-icons/fa";
import Navbar from "./components/Navbar.jsx";
import Home from "./pages/Home.jsx";
import About from "./pages/About.jsx";
import Service from "./pages/Service.jsx";
import Contact from "./pages/Contact.jsx";

function App() {
  return (
    <BrowserRouter>
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<Service />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>

      <a
        className="whatsapp-float"
        href="https://wa.me/911234567890"
        target="_blank"
        rel="noopener noreferrer"
      >
        <FaWhatsapp size={26} /> Chat on WhatsApp
      </a>

      <footer style={{ textAlign: "center", padding: "20px", background: "#0b2c4d", color: "white" }}>
        © 2025 Morya Aluminum & Glass | Pune
      </footer>
    </BrowserRouter>
  );
}

export default App;
