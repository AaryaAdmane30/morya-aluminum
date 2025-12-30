function Contact() {
  return (
    <div className="contact-container" id="contact">
      <div className="contact-section">
        <h2>Contact Us</h2>

        <div className="contact-details">
          <p>
            <strong>📍 Address:</strong>{" "}
            <a
              href="https://www.google.com/maps?q=nehru%20chowk%20aundhgaon%20pune"
              target="_blank"
              rel="noopener noreferrer"
            >
              Nehru Chowk, Aundhgaon, Pune
            </a>
          </p>

          <p>
            <strong>📞 Phone:</strong>{" "}
            <a href="tel:+919850119396">9850119396</a>,{" "}
            <a href="tel:+918208176618">+8208176618</a>
          </p>

          <p>
            <strong>📧 Email:</strong>{" "}
            <a href="mailto:chetan.deskhmukh81@gmail.com">
              chetan.deskhmukh81@gmail.com
            </a>
          </p>

          <a
            className="contact-btn"
            href="https://wa.me/9850119396"
            target="_blank"
            rel="noopener noreferrer"
          >
            💬 WhatsApp Us
          </a>
        </div>

        <div className="map-wrapper">
          <iframe
            src="https://www.google.com/maps?q=nehru%20chowk%20aundhgaon%20pune&output=embed"
            width="100%"
            height="350"
            style={{ borderRadius: "10px", border: "none" }}
          ></iframe>
        </div>
      </div>

      {/* CSS Styling */}
      <style jsx>{`
        .contact-container {
          padding: 60px 20px;
          background: #f4f6fa;
          display: flex;
          justify-content: center;
        }

        .contact-section {
          max-width: 800px;
          width: 100%;
          background: white;
          padding: 40px;
          border-radius: 15px;
          box-shadow: 0 8px 25px rgba(0, 0, 0, 0.1);
        }

        .contact-section h2 {
          text-align: center;
          font-size: 32px;
          margin-bottom: 30px;
          color: #0b2c4d;
        }

        .contact-details p {
          font-size: 18px;
          margin: 10px 0;
        }

        .contact-details a {
          color: #0b2c4d;
          text-decoration: none;
          font-weight: 500;
        }

        .contact-details a:hover {
          text-decoration: underline;
        }

        .contact-btn {
          display: inline-block;
          margin-top: 20px;
          padding: 12px 25px;
          background: #25d366; /* WhatsApp green */
          color: white;
          font-weight: bold;
          border-radius: 8px;
          text-decoration: none;
          transition: transform 0.2s;
        }

        .contact-btn:hover {
          transform: scale(1.05);
        }

        .map-wrapper {
          margin-top: 30px;
          border-radius: 10px;
          overflow: hidden;
          box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1);
        }

        @media (max-width: 768px) {
          .contact-section {
            padding: 30px 20px;
          }
        }
      `}</style>
    </div>
  );
}

export default Contact;
