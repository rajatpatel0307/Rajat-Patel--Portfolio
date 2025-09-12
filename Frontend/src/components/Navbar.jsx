import React from "react";
import { Navbar, Nav, Container } from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css';

export default function CustomNavbar() {
  const scrollToSection = (id) => {
    const el = document.getElementById(id);
    if (el) {
      window.scrollTo({ top: el.offsetTop - 70, behavior: "smooth" });
    }
  };

  const links = [
    { id: "home", label: "Home" },
    { id: "about", label: "About" },
    { id: "projects", label: "Projects" },
    { id: "skills", label: "Skills" },
    { id: "tools", label: "Tools" },      // ✅ Added Tools section
    { id: "contact", label: "Contact" }
  ];

  return (
    <Navbar fixed="top" expand="lg" className="bg-white shadow-sm py-3">
      <Container>
        {/* Brand */}
        <Navbar.Brand
          href="#home"
          className="fw-bold text-primary fs-4"
          onClick={(e) => {
            e.preventDefault();
            scrollToSection("home");
          }}
        ><i className="fa-solid fa-laptop-code me-2 fs-5 text-primary"></i>

          Rajat Patel
        </Navbar.Brand>

        {/* Toggle Button */}
        <Navbar.Toggle aria-controls="basic-navbar-nav" />

        {/* Collapsible Nav Links */}
        <Navbar.Collapse id="basic-navbar-nav" className="justify-content-end">
          <Nav className="gap-3">
            {links.map((link) => (
              <Nav.Link
                key={link.id}
                href={`#${link.id}`}
                className="nav-link-custom"
                onClick={(e) => {
                  e.preventDefault();
                  scrollToSection(link.id);
                }}
              >
                {link.label}
              </Nav.Link>
            ))}
          </Nav>
        </Navbar.Collapse>
      </Container>

      {/* Custom Styles */}
      <style jsx="true">{`
        .nav-link-custom {
          color: #333;
          font-weight: 500;
          position: relative;
          transition: color 0.3s ease;
        }

        .nav-link-custom:hover {
          color: #0d6efd;
        }

        .nav-link-custom::after {
          content: '';
          position: absolute;
          bottom: 0;
          left: 50%;
          transform: translateX(-50%);
          width: 0;
          height: 2px;
          background-color: #0d6efd;
          transition: width 0.3s ease;
        }

        .nav-link-custom:hover::after {
          width: 50%;
        }
      `}</style>
    </Navbar>
  );
}
