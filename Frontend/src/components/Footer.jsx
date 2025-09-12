import React from 'react';

export default function Footer() {
  return (
    <footer className="footer text-white py-4">
      <div className="container d-flex flex-column flex-md-row justify-content-between align-items-center">
        <p className="mb-2 mb-md-0">
          &copy; {new Date().getFullYear()} <strong>Rajat Patel</strong>. All rights reserved.
        </p>
        <div className="social-icons">
          <a href="https://www.linkedin.com/in/rajat-patel-21590b293/" target="_blank" rel="noreferrer" aria-label="LinkedIn">
            <i className="fab fa-linkedin-in"></i>
          </a>
          <a href="https://github.com/rajatpatel0307" target="_blank" rel="noreferrer" aria-label="GitHub">
            <i className="fab fa-github"></i>
          </a>
          <a href="https://www.instagram.com/itz_me_rajatpatel/" target="_blank" rel="noreferrer" aria-label="Instagram">
            <i className="fab fa-instagram"></i>
          </a>
          <a href="mailto:rajat03patel@gmail.com" aria-label="Email">
            <i className="fas fa-envelope"></i>
          </a>
        </div>
      </div>

      <style jsx="true">{`
        .footer {
          background: linear-gradient(135deg, #928dab, #1f1c2c);
        }

        .social-icons a {
          color: #ffffff;
          margin-left: 20px;
          font-size: 1.4rem;
          display: inline-block;
          transition: transform 0.3s ease, color 0.3s ease;
        }

        .social-icons a:hover {
          color: #00d9ff;
          transform: scale(1.2);
        }

        @media (max-width: 576px) {
          .social-icons {
            margin-top: 10px;
          }

          .container {
            text-align: center;
          }
        }
      `}</style>
    </footer>
  );
}
