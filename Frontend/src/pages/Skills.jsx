import React from 'react';

export default function Skills() {
  const skills = [
    { name: 'HTML5', icon: 'fa-brands fa-html5', color: '#e34c26' },
    { name: 'CSS3', icon: 'fa-brands fa-css3-alt', color: '#264de4' },
    { name: 'JavaScript', icon: 'fa-brands fa-js', color: '#f0db4f' },
    { name: 'React', icon: 'fa-brands fa-react', color: '#61dafb' },
    { name: 'Bootstrap', icon: 'fa-brands fa-bootstrap', color: '#7952b3' },
    { name: 'Node.js', icon: 'fa-brands fa-node-js', color: '#3c873a' },
    { name: 'MongoDB', icon: 'fa-solid fa-database', color: '#4db33d' },
    { name: 'Express.js', icon: 'fa-solid fa-server', color: '#4db33d' },
  ];

  return (
    <section id="skills" className="py-5" style={{
        background: "linear-gradient(to right, #928dab,  #1f1c2c)",
        padding: "60px 0",
      }}>
      <div className="container">
        <h2 className="text-center fw-bold mb-5 text-dark">My Skills</h2>
        <div className="row g-4 justify-content-center">
          {skills.map((skill, idx) => (
            <div className="col-6 col-md-4 col-lg-3" key={idx}>
              <div className="skill-card text-center p-4 rounded shadow-sm">
                <div className="icon-box mb-3" style={{ color: skill.color }}>
                  <i className={`${skill.icon} fa-2x`}></i>
                </div>
                <h6 className="mb-0 fw-semibold" style={{ color: skill.color }}>{skill.name}</h6>
              </div>
            </div>
          ))}
        </div>
      </div>

      <style jsx="true">{`
        .skill-card {
          background: #3b3b3bff;
          border-radius: 16px;
          transition: all 0.3s ease;
          border: 2px solid transparent;
        }

        .skill-card:hover {
         background: linear-gradient(145deg, #0f2027, #203a43, #2c5364);
          color: #fff;
          transform: translateY(-6px);
          box-shadow: 0 10px 25px rgba(0, 0, 0, 0.15);
        }

        .skill-card:hover .icon-box,
        .skill-card:hover h6 {
          color: #ffffff !important;
        }

        .icon-box i {
          transition: transform 0.3s ease, color 0.3s ease;
        }

        .skill-card:hover i {
          transform: scale(1.2);
        }
      `}</style>
    </section>
  );
}
