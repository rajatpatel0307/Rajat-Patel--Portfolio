import React from "react";

export default function ProjectCard({ project }) {
  return (
    <div className="card h-100 border-0 shadow-sm" data-aos="fade-up">
      <img
        src={project.image}
        alt={project.title}
        className="card-img-top"
        style={{ height: "200px", objectFit: "cover" }}
      />
      <div className="card-body d-flex flex-column" style={{backgroundColor:"#4a4462ff"}}>
        <h5 className="card-title text-primary">{project.title}</h5>
        <p className="card-text text-white flex-grow-1">{project.description}</p>
        <div className="mb-3">
          {project.technologies.map((tech, idx) => (
            <span key={idx} className="badge bg-secondary me-2 mb-2">
              {tech}
            </span>
          ))}
        </div>
        <div className="d-flex justify-content-between mt-auto">
          <a href={project.demo} target="_blank" rel="noreferrer" className="btn btn-outline-primary btn-sm">
            Live Demo
          </a>
          <a href={project.github} target="_blank" rel="noreferrer" className="btn btn-dark btn-sm">
            GitHub
          </a>
        </div>
      </div>
    </div>
  );
}
