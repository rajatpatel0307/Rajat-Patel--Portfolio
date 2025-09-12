import React from 'react';
import profileImage from '../assets/profile.jpg';

export default function About() {
  return (
    <section
      id="about"
      className="py-5"
      style={{
        background: "linear-gradient(to right, #928dab,  #1f1c2c)",
        padding: "60px 0",
      }}
    >
      <div className="container" data-aos="fade-up">
        {/* Heading */}
        <div className="text-center mb-5">
          <h2 className="fw-bold text-white">About Me</h2>
          <p className="text-light">Let me introduce myself</p>
          <div
            className="mx-auto mb-4"
            style={{
              width: '60px',
              height: '4px',
              background: '#0d6efd',
              borderRadius: '2px',
            }}
          ></div>
        </div>

        <div className="row align-items-center">
          {/* Image Section */}
          <div className="col-lg-6 order-1 order-lg-2 text-center mb-4 mb-lg-0">
            <div
              className="mx-auto shadow"
              style={{
                width: '270px',
                height: '330px',
                borderRadius: '50% / 40%',
                background: 'rgba(255, 255, 255, 0.08)',
                padding: '8px',
                border: '1px solid rgba(255, 255, 255, 0.1)',
              }}
            >
              <img
                src={profileImage}
                alt="Rajat Patel"
                className="w-100 h-100"
                style={{
                  objectFit: 'cover',
                  borderRadius: '50% / 40%',
                }}
              />
            </div>
          </div>

          {/* Text Section */}
          <div className="col-lg-6 order-2 order-lg-1">
            <h5 className="text-uppercase text-info mb-3">Who I Am</h5>
            <p className="lead text-light">
              I'm <strong>Rajat Patel</strong>, a{' '}
              <span className="text-primary">Full-Stack Web Developer</span> passionate about building fast, scalable, and beautiful web experiences.
            </p>
            <p className="text-white">
              I enjoy translating business ideas into elegant code and intuitive UI. Whether designing a mobile-first frontend or managing backend infrastructure, I strive for clean, maintainable solutions.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
