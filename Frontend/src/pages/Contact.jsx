import React, { useState } from "react";

export default function Contact() {
  // Declare state variables
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);


  // Handle form submit
  const handleSubmit = async (e) => {
  e.preventDefault();
  setLoading(true); // 🟢 Start loading

  try {
    // Automatically choose API base URL
    const baseURL =
      window.location.hostname === "localhost"
        ? "http://localhost:5000"
        : "https://rajat-patel-portfolio.onrender.com";

    const res = await fetch(`${baseURL}/contact`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ name, email, message }),
    });

    const data = await res.json();

    if (data.success) {
      alert("✅ Message sent successfully!");
      setName("");
      setEmail("");
      setMessage("");
    } else {
      alert("❌ Failed to send message.");
    }
  } catch (error) {
    console.error("Error sending message:", error);
    alert("❌ Server error.");
  }

  setLoading(false); // 🔴 Stop loading
};


  return (
    <section id="contact" className="py-5 bg-light-dark" style={{
        background: "linear-gradient(to right, #1f1c2c, #928dab)",
        padding: "60px 0",
      }}>
      <div className="container">
        <h2 className="text-center fw-bold mb-5">Contact Me</h2>
        <div className="row g-4 align-items-start">

          {/* Left side */}
          <div className="col-md-5 text-light">
            <div className="mb-4 d-flex align-items-start gap-3">
              <i className="fas fa-envelope fa-lg text-primary mt-1"></i>
              <div>
                <h6 className="fw-bold mb-1">Email</h6>
                <p className="mb-0">
                  <a href="mailto:rajat03patel@gmail.com" className="text-light">
                    rajat03patel@gmail.com
                  </a>
                </p>
              </div>
            </div>
            <div className="mb-4 d-flex align-items-start gap-3">
              <i className="fas fa-phone fa-lg text-primary mt-1"></i>
              <div>
                <h6 className="fw-bold mb-1">Phone</h6>
                <p className="mb-0">
                  <a href="tel:+919555853081" className="text-light">
                    +91 9555853081
                  </a>
                </p>
              </div>
            </div>
            <div className="mb-4 d-flex align-items-start gap-3">
              <i className="fas fa-map-marker-alt fa-lg text-primary mt-1"></i>
              <div>
                <h6 className="fw-bold mb-1">Location</h6>
                <p className="mb-0">Lucknow, Uttar Pradesh, India</p>
              </div>
            </div>
            <div className="mb-3 d-flex align-items-start gap-3">
              <i className="fas fa-share-alt fa-lg text-primary mt-1"></i>
              <div>
                <h6 className="fw-bold mb-2">Social</h6>
                <div className="d-flex gap-3">
                  <a href="https://www.linkedin.com/in/rajat-patel-21590b293/" target="_blank" rel="noreferrer">
                    <i className="fab fa-linkedin fa-2x text-light"></i>
                  </a>
                  <a href="https://github.com/rajatpatel0307" target="_blank" rel="noreferrer">
                    <i className="fab fa-github fa-2x text-light"></i>
                  </a>
                  <a href="https://www.instagram.com/itz_me_rajatpatel/" target="_blank" rel="noreferrer">
                    <i className="fab fa-instagram fa-2x text-light"></i>
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Right side form */}
          <div className="col-md-7 text-white">
            <form onSubmit={handleSubmit}>
              <div className="mb-3">
                <label htmlFor="name" className="form-label fw-semibold">Your Name</label>
                <input
                  type="text"
                  className="form-control"
                  style={{backgroundColor:"#484567ff", color:"white"}}
                  id="name"
                  required
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                />
              </div>

              <div className="mb-3">
                <label htmlFor="email" className="form-label fw-semibold">Your Email</label>
                <input
                  type="email"
                  className="form-control"
                  style={{backgroundColor:"#484567ff", color:"white"}}
                  id="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>

              <div className="mb-3">
                <label htmlFor="message" className="form-label fw-semibold">Your Message</label>
                <textarea
                  className="form-control"
                  style={{backgroundColor:"#484567ff", color:"white"}}
                  id="message"
                  rows="5"
                  required
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                ></textarea>
              </div>

              <button type="submit" className="btn btn-primary w-100 fw-semibold" disabled={loading}>
                {loading ? (
                  <>
                    <span className="spinner-border spinner-border-sm me-2" role="status" aria-hidden="true"></span>
                    Sending...
                  </>
                ) : (
                  "Send Message"
                )}
              </button>
            </form>
          </div>

        </div>
      </div>
    </section>
  );
}
