import React from 'react';

const testimonials = [
  {
    name: "Client A",
    role: "CEO, ABC Corp",
    text: "Incredible work and attention to detail. Highly recommend!",
  },
  {
    name: "Client B",
    role: "CTO, XYZ Ltd",
    text: "Delivered ahead of schedule with excellent quality.",
  },
  {
    name: "Client C",
    role: "Founder, StartupX",
    text: "Understood our vision and executed it brilliantly.",
  },
];

export default function Testimonials() {
  return (
    <section
      id="testimonials"
      className="py-5"
      style={{
        background: "linear-gradient(to right, #928dab,  #1f1c2c)",
        padding: "60px 0",
      }}
    >
      <div className="container">
        <h2 className="text-center fw-bold mb-5 text-white">Testimonials</h2>
        <div className="row justify-content-center">
          {testimonials.map((t, idx) => (
            <div className="col-md-6 col-lg-4 mb-4" key={idx}>
              <div className="testimonial-card dark-glass p-4 rounded-4 position-relative shadow h-100">
                <div className="quote-icon-wrapper">
                  <i className="fa-solid fa-quote-left quote-icon"></i>
                </div>
                <p className="testimonial-text text-light fst-italic">"{t.text}"</p>
                <div className="mt-4">
                  <h5 className="mb-1 text-white">{t.name}</h5>
                  <small className="text-muted">{t.role}</small>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <style jsx="true">{`
        .testimonial-card {
          background: rgba(255, 255, 255, 0.05);
          border: 1px solid rgba(255, 255, 255, 0.1);
          backdrop-filter: blur(10px);
          transition: transform 0.3s ease, box-shadow 0.3s ease;
        }

        .testimonial-card:hover {
          transform: translateY(-8px);
          box-shadow: 0 15px 30px rgba(0, 0, 0, 0.3);
        }

        .quote-icon-wrapper {
          position: absolute;
          top: -18px;
          left: 20px;
          background: linear-gradient(to right, #0d6efd, #6610f2);
          width: 40px;
          height: 40px;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .quote-icon {
          color: #fff;
          font-size: 1rem;
        }

        .testimonial-text {
          font-size: 0.95rem;
        }
      `}</style>
    </section>
  );
}
