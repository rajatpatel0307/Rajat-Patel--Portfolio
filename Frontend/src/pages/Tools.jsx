import React from 'react';

export default function Tools() {
  const tools = [
    { name: 'Visual Studio Code', icon: 'fa-solid fa-code', color: '#007acc' },
    { name: 'Postman', icon: 'fa-solid fa-envelope-open-text', color: '#ff6c37' },
    { name: 'Figma', icon: 'fa-brands fa-figma', color: '#a259ff' },
    { name: 'Git', icon: 'fa-brands fa-git-alt', color: '#f05033' },
    { name: 'GitHub', icon: 'fa-brands fa-github', color: '#605656ff' },
    { name: 'Vercel', icon: 'fa-solid fa-rocket', color: '#000000' },
    { name: 'Netlify', icon: 'fa-solid fa-globe', color: '#00ad9f' },
    { name: 'Canva', icon: 'fa-solid fa-palette', color: '#00c4cc' }
  ];

  return (
    <section id="tools" className="py-5"style={{
        background: "linear-gradient(to right, #1f1c2c, #928dab)",
        padding: "60px 0",
      }}>
      <div className="container">
        <h2 className="text-center fw-bold mb-5" style={{ color: '#333' }}>Development Tools</h2>
        <div className="row g-4 justify-content-center">
          {tools.map((tool, idx) => (
            <div className="col-6 col-md-4 col-lg-3" key={idx}>
              <div className="tool-box p-4 rounded text-center shadow">
                <i className={`${tool.icon} fa-2x mb-3`} style={{ color: tool.color }}></i>
                <h6 className="fw-semibold">{tool.name}</h6>
              </div>
            </div>
          ))}
        </div>
      </div>

      <style jsx="true">{`
        .tool-box {
          background: #3b3b3bff;
          border-radius: 16px;
          transition: all 0.4s ease-in-out;
          color: white;
        }

        .tool-box:hover {
          background: linear-gradient(145deg, #0f2027, #203a43, #2c5364);
          color: #fff;
          transform: translateY(-6px);
          box-shadow: 0 10px 25px rgba(0, 0, 0, 0.15);
        }

        .tool-box:hover i,
        .tool-box:hover h6 {
          color: #fff !important;
        }
      `}</style>
    </section>
  );
}
