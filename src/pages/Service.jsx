function Service() {
  return (
    <div className="services-container" id="services">
      <div className="services-section">
        <h2>Our Services</h2>

        <div className="service-grid">

          <div className="service-card">
            <img 
              src="https://adornocreatives.in/wp-content/uploads/2024/10/insect-screen-horizental-1.jpg" 
              alt="Pleated Mosquito Mesh" 
            />
            <h3>Pleated Mosquito Mesh</h3>
            <p>Durable, easy-to-use pleated mesh custom-fit for any window or door.</p>
          </div>

          <div className="service-card">
            <img 
              src="https://rajatfabrication.com/wp-content/uploads/2024/05/Aluminium-Fabrication-Work-delhi.jpg" 
              alt="Aluminum Fabrication" 
            />
            <h3>Aluminum Fabrication</h3>
            <p>Strong and long-lasting doors, windows, and partitions.</p>
          </div>

          <div className="service-card">
            <img 
              src="https://ayshgroups.b-cdn.net/wp-content/uploads/2025/05/Frameless-Toughened-Glass-Partition-Works-1.webp" 
              alt="Glass Work" 
            />
            <h3>Glass Work</h3>
            <p>Sliding doors, glass partitions & repairs.</p>
          </div>

          <div className="service-card">
            <img 
              src="https://5.imimg.com/data5/SELLER/Default/2022/2/JW/UD/YS/11968254/designer-stainless-steel-balcony-grill.jpg" 
              alt="Stainless Grills" 
            />
            <h3>Stainless Grills</h3>
            <p>High-quality stainless steel grills for safety & style.</p>
          </div>

          <div className="service-card">
            <img 
              src="https://www.beautifulhomes.asianpaints.com/content/dam/asianpaintsbeautifulhomes/gallery/home-office-design/modern-home-office-with-wooden-shelves-and-leather-upholstered-chair/modern-wooden-home-office-setup.jpg.transform/bh-gallery-listing/image.webp" 
              alt="Home / Office Fittings" 
            />
            <h3>Home / Office Fittings</h3>
            <p>Custom shelves, cabinets, partitions and more.</p>
          </div>

        </div>
      </div>

      <style jsx>{`
        .services-container {
          padding: 60px 20px;
          background: #f4f6fa;
          display: flex;
          justify-content: center;
        }

        .services-section {
          max-width: 1200px;
          width: 100%;
        }

        .services-section h2 {
          text-align: center;
          font-size: 32px;
          margin-bottom: 40px;
          color: #0b2c4d;
        }

        .service-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
          gap: 25px;
        }

        .service-card {
          background: white;
          border-radius: 15px;
          box-shadow: 0 8px 25px rgba(0, 0, 0, 0.1);
          padding: 20px;
          text-align: center;
          transition: transform 0.3s, box-shadow 0.3s;
        }

        .service-card img {
          width: 100%;
          height: 180px;
          object-fit: cover;
          border-radius: 10px;
          margin-bottom: 15px;
        }

        .service-card h3 {
          font-size: 20px;
          margin-bottom: 10px;
          color: #0b2c4d;
        }

        .service-card p {
          font-size: 16px;
          color: #555;
        }

        .service-card:hover {
          transform: translateY(-10px);
          box-shadow: 0 15px 35px rgba(0, 0, 0, 0.2);
        }

        @media (max-width: 768px) {
          .service-grid {
            gap: 20px;
          }
        }
      `}</style>

    </div>
  );
}

export default Service;
