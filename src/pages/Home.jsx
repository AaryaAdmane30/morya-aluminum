import { FaShieldAlt, FaTools, FaCheckCircle } from "react-icons/fa";

function Home() {
  return (
    <div className="container" id="home">

      {/* HERO SECTION */}
      <div className="hero">
       <img
  src="https://images.pexels.com/photos/9901861/pexels-photo-9901861.jpeg"
  alt="Aluminum & Glass Work"
/>


        <div className="hero-overlay"></div>

        <div className="hero-text">
          <h1 className="hero-title">
            Morya Aluminum & Glass
          </h1>

          <p className="hero-subtitle">
            Premium Quality • Elegant Designs • Trusted Workmanship
          </p>

          <button className="cta-btn">
            Explore Our Services
          </button>
        </div>
      </div>

      {/* WHY CHOOSE US */}
      <div className="section" id="about">
        <h2 className="section-title">Why Choose Us?</h2>

        <div className="features">

          <div className="feature-box">
            <FaShieldAlt size={45} className="icon" />
            <h3>Strong & Durable</h3>
            <p>High-quality aluminum, premium glass & stainless steel.</p>
          </div>

          <div className="feature-box">
            <FaTools size={45} className="icon" />
            <h3>Professional Craftsmanship</h3>
            <p>Precision fitting with clean modern finishing.</p>
          </div>

          <div className="feature-box">
            <FaCheckCircle size={45} className="icon" />
            <h3>Trusted Service</h3>
            <p>Reliable work with honest pricing.</p>
          </div>

        </div>
      </div>

    </div>
  );
}

export default Home;
