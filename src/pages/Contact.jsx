function Contact() {
  return (
    <div className="container" id="contact">
      <div className="section">
        <h2>Contact Us</h2>

        <p><strong>📍 Address:</strong> Nehru Chowk, Aundhgaon, Pune</p>
        <p><strong>📞 Phone:</strong></p>
        <p>+91 12345 67890</p>
        <p>+91 98765 43210</p>
        <p><strong>📧 Email:</strong> info@moryaaluminum.com</p>

        <a
          className="btn"
          href="https://wa.me/911234567890"
          target="_blank"
          rel="noopener noreferrer"
        >
          WhatsApp Us
        </a>

        <div style={{ marginTop: "20px" }}>
          <iframe
            src="https://www.google.com/maps?q=nehru%20chowk%20aundhgaon%20pune&output=embed"
            width="100%"
            height="350"
            style={{ borderRadius: "10px" }}
          ></iframe>
        </div>
      </div>
    </div>
  );
}

export default Contact;
