import { useEffect } from "react";
import { TypeAnimation } from "react-type-animation";
import AOS from "aos";
import "aos/dist/aos.css";
import profileImage from "../assets/profile.jpg";
import resume from "../assets/Rajat Resume03.pdf";
import { Container, Row, Col, Button, OverlayTrigger, Tooltip } from "react-bootstrap";

export default function Hero() {
  useEffect(() => {
    AOS.init({
      duration: 800,
      once: true,
      easing: "ease-in-out-cubic",
      mirror: true,
    });
  }, []);

  const socialLinks = [
    { icon: "fab fa-github", url: "https://github.com/rajatpatel0307", label: "GitHub" },
    { icon: "fab fa-linkedin", url: "https://www.linkedin.com/in/rajat-patel-21590b293/", label: "LinkedIn" },
    { icon: "fab fa-twitter", url: "https://twitter.com/rajatpatel0307", label: "Twitter" },
    { icon: "fas fa-envelope", url: "mailto:rajat03patel@gmail.com", label: "Email" },
  ];

  const typeAnimationSequence = [
    "Frontend Developer",
    2000,
    "Full Stack Engineer",
    2000,
    "Software Engineer",
    2000,
    "UI/UX Designer",
    2000,
    "Tech Enthusiast",
    2000,
  ];

  return (
    <section
      id="home"
      className="hero-section text-light d-flex align-items-center"
      style={{
        minHeight: "100vh",
        background: "linear-gradient(to right, #1f1c2c, #928dab)",
        padding: "60px 0",
      }}
    >
      <Container>
        <Row className="justify-content-center align-items-center text-center">
          <Col lg={4} md={6} className="mb-5" data-aos="fade-up" data-aos-delay="100">
            <div
              className="position-relative mx-auto"
              style={{
                width: "100%",
                maxWidth: "280px",
                height: "370px", // Slightly smaller than before
              }}
            >
              <img
                src={profileImage}
                alt="Rajat Patel"
                className="img-fluid shadow"
                style={{
                  width: "100%",
                  height: "100%",
                  objectFit: "cover",
                  borderRadius: "50% / 40%", // Egg-like shape
                }}
                loading="lazy"
              />

              {/* Decorative Rings */}
              <div
                className="position-absolute top-0 start-0 border border-3 border-primary opacity-25"
                style={{
                  width: "100%",
                  height: "100%",
                  borderRadius: "50% / 40%",
                  zIndex: -1,
                }}
              ></div>
              <div
                className="position-absolute top-0 start-0 border border-3 border-primary opacity-10"
                style={{
                  width: "100%",
                  height: "100%",
                  borderRadius: "50% / 40%",
                  transform: "scale(1.06)",
                  zIndex: -2,
                }}
              ></div>
            </div>
          </Col>


          <Col lg={8} data-aos="fade-up" data-aos-delay="200">
            <h1 className="display-4 fw-bold mb-3">
              Hi, I'm <span className="text-info">Rajat Patel</span>
            </h1>

            <h2 className="h4 mb-4 text-white-50">
              <TypeAnimation
                sequence={typeAnimationSequence}
                wrapper="span"
                speed={50}
                deletionSpeed={65}
                repeat={Infinity}
              />
            </h2>

            <p className="lead text-light mb-4 px-3 px-md-5">
              I specialize in crafting elegant and efficient digital experiences using modern web technologies. Clean code and intuitive UI are my focus.
            </p>

            <div className="d-flex flex-wrap justify-content-center gap-3 mb-4">
              <Button
                href="#projects"
                variant="info"
                size="lg"
                className="px-4 py-2"
                data-aos="fade-up"
                data-aos-delay="300"
                role="button"
              >
                View My Work <i className="fas fa-arrow-right ms-2"></i>
              </Button>
              <Button
                href={resume}
                variant="light"
                target="blank"
                size="lg"
                className="px-4 py-2 d-flex align-items-center gap-2"
                data-aos="fade-up"
                data-aos-delay="400"
                role="button"
              >
                <i className="fas fa-file-download"></i> Resume
              </Button>

            </div>

            {/* Social Links */}
            <div className="d-flex justify-content-center gap-3">
              {socialLinks.map((social, index) => (
                <OverlayTrigger
                  key={index}
                  placement="bottom"
                  overlay={<Tooltip id={`tooltip-${index}`}>{social.label}</Tooltip>}
                >
                  <a
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn-outline-info btn-lg rounded-circle"
                    aria-label={social.label}
                    data-aos="fade-up"
                    data-aos-delay={500 + index * 100}
                    role="button"
                  >
                    <i className={social.icon}></i>
                  </a>
                </OverlayTrigger>
              ))}
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
}
