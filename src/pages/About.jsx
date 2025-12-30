import { FaShieldAlt, FaTools, FaCheckCircle } from "react-icons/fa";

function About() {
  return (
    <div className="container" id="about">
      <div className="section" style={{ display: "flex", flexWrap: "wrap", gap: "30px", alignItems: "center" }}>
        
        {/* Left: Image */}
        <div style={{ flex: "1", minWidth: "300px" }}>
          <img
            src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c" 
            alt="About Morya Aluminum" 
            style={{
              width: "100%",
              borderRadius: "12px",
              boxShadow: "0 4px 15px rgba(0,0,0,0.1)",
              objectFit: "cover",
            }}
          />
        </div>

        {/* Right: Text + Features */}
        <div style={{ flex: "1", minWidth: "300px" }}>
          <h2>About Us</h2>
          <p>
            Based in Pune, <strong>Morya Aluminum & Glass</strong> provides high-quality aluminum, glass, and stainless steel services for homes and offices.
          </p>
          <p>
            We focus on precision, durability, and customer satisfaction. Our mission is simple — reliable work done right, every time.
          </p>
          
          {/* Feature Icons */}
          <div style={{ display: "flex", gap: "15px", marginTop: "20px" }}>
            <div style={{ textAlign: "center", flex: "1", background: "#f7f7f7", padding: "15px", borderRadius: "10px", boxShadow: "0 4px 10px rgba(0,0,0,0.1)" }}>
              <FaShieldAlt size={30} color="#0b2c4d"/>
              <h4 style={{ marginTop: "8px" }}>Strong & Durable</h4>
            </div>
            <div style={{ textAlign: "center", flex: "1", background: "#f7f7f7", padding: "15px", borderRadius: "10px", boxShadow: "0 4px 10px rgba(0,0,0,0.1)" }}>
              <FaTools size={30} color="#0b2c4d"/>
              <h4 style={{ marginTop: "8px" }}>Professional Work</h4>
            </div>
            <div style={{ textAlign: "center", flex: "1", background: "#f7f7f7", padding: "15px", borderRadius: "10px", boxShadow: "0 4px 10px rgba(0,0,0,0.1)" }}>
              <FaCheckCircle size={30} color="#0b2c4d"/>
              <h4 style={{ marginTop: "8px" }}>Trusted Service</h4>
            </div>
          </div>

          <a href="/contact" className="btn" style={{ marginTop: "25px", display: "inline-block" }}>Contact Us</a>
        </div>

      </div>
    </div>
  );
}

export default About;
