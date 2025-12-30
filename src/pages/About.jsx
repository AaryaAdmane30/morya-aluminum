import { FaShieldAlt, FaTools, FaCheckCircle } from "react-icons/fa";

function Feature({ icon, title }) {
  return (
    <div className="feature-card">
      {icon}
      <h4>{title}</h4>
    </div>
  );
}

function About() {
  return (
    <div className="about-container" id="about">
      <div className="about-section">
        {/* Left: Image */}
        <div className="about-image">
          <img
            src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c"
            alt="About Morya Aluminum"
          />
        </div>

        {/* Right: Text + Features */}
        <div className="about-text">
          <h2>About Us</h2>
          <p>
            Based in Pune, <strong>Morya Aluminum & Glass</strong> provides
            high-quality aluminum, glass, and stainless steel services for homes and offices.
          </p>
          <p>
            We focus on precision, durability, and customer satisfaction. Our mission is simple — reliable work done right, every time.
          </p>

          {/* Features */}
          <div className="features-grid">
            <Feature icon={<FaShieldAlt size={30} color="#0b2c4d"/>} title="Strong & Durable" />
            <Feature icon={<FaTools size={30} color="#0b2c4d"/>} title="Professional Work" />
            <Feature icon={<FaCheckCircle size={30} color="#0b2c4d"/>} title="Trusted Service" />
          </div>

          <a href="/contact" className="btn">Contact Us</a>
        </div>
      </div>

      {/* CSS Styling */}
      <style jsx>{`
        .about-container {
          padding: 60px 20px;
          background: #f4f6fa;
          display: flex;
          justify-content: center;
        }

        .about-section {
          display: flex;
          flex-wrap: wrap;
          gap: 30px;
          max-width: 1200px;
          width: 100%;
          align-items: center;
        }

        .about-image {
          flex: 1;
          min-width: 300px;
        }

        .about-image img {
          width: 100%;
          border-radius: 12px;
          box-shadow: 0 4px 15px rgba(0,0,0,0.1);
          object-fit: cover;
        }

        .about-text {
          flex: 1;
          min-width: 300px;
        }

        .about-text h2 {
          font-size: 32px;
          color: #0b2c4d;
          margin-bottom: 20px;
        }

        .about-text p {
          font-size: 16px;
          color: #555;
          margin-bottom: 15px;
        }

        .features-grid {
          display: flex;
          gap: 15px;
          margin-top: 20px;
          flex-wrap: wrap;
        }

        .feature-card {
          flex: 1;
          min-width: 120px;
          text-align: center;
          background: #f7f7f7;
          padding: 15px;
          border-radius: 10px;
          box-shadow: 0 4px 10px rgba(0,0,0,0.1);
          transition: transform 0.3s, box-shadow 0.3s;
        }

        .feature-card:hover {
          transform: translateY(-5px);
          box-shadow: 0 8px 20px rgba(0,0,0,0.15);
        }

        .feature-card h4 {
          margin-top: 8px;
          font-size: 16px;
          color: #0b2c4d;
        }

        .btn {
          display: inline-block;
          margin-top: 25px;
          padding: 12px 25px;
          background: #0b2c4d;
          color: white;
          font-weight: 500;
          border-radius: 8px;
          text-decoration: none;
          transition: transform 0.2s;
        }

        .btn:hover {
          transform: scale(1.05);
        }

        @media (max-width: 768px) {
          .about-section {
            flex-direction: column;
          }
        }
      `}</style>
    </div>
  );
}

export default About;
