import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import { FaWhatsapp } from "react-icons/fa";
import Home from "./pages/Home.jsx";
import About from "./pages/About.jsx";
import Services from "./pages/Service.jsx";
import Contact from "./pages/Contact.jsx";

function App() {
  return (
    <BrowserRouter>
      <header className="topbar">
        Morya Aluminum & Glass
      </header>

      <nav className="navbar">
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/services">Services</Link>
        <Link to="/contact">Contact</Link>
      </nav>

      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/about" element={<About/>}/>
        <Route path="/services" element={<Services/>}/>
        <Route path="/contact" element={<Contact/>}/>
      </Routes>

      <a className="whatsapp-float"
         href="https://wa.me/911234567890"
         target="_blank">
        <FaWhatsapp size={26}/> Chat on WhatsApp
      </a>

      <footer>
        © 2025 Morya Aluminum & Glass | Pune
      </footer>
    </BrowserRouter>
  );
}

export default App;
