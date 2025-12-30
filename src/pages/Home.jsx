import { FaShieldAlt, FaTools, FaCheckCircle } from "react-icons/fa";

function Home() {
  return (
    <div className="container" id="home">
      {/* Hero */}
      <div className="hero">
        <img
          src="https://images.unsplash.com/photo-1505691938895-1758d7feb511"
          alt="Aluminum & Glass"
        />
        <div className="hero-text">
          <h1>Morya Aluminum & Glass</h1>
          <p>Quality Work You Can Trust</p>
        </div>
      </div>

      {/* About / Features */}
      <div className="section" id="about">
        <h2>Why Choose Us?</h2>
        <div className="features">
          <div className="feature-box">
            <FaShieldAlt size={40} />
            <h3>Strong & Durable</h3>
            <p>High quality aluminum, glass & stainless material.</p>
          </div>
          <div className="feature-box">
            <FaTools size={40} />
            <h3>Professional Work</h3>
            <p>Expert workmanship with precision.</p>
          </div>
          <div className="feature-box">
            <FaCheckCircle size={40} />
            <h3>Trusted Service</h3>
            <p>Reliable & customer-focused service.</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
