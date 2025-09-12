import { projects } from "../data/projectData";
import ProjectCard from "../components/ProjectCard";

export default function Projects() {
  return (
    <section id="projects" className="py-5" style={{
        background: "linear-gradient(to right, #1f1c2c, #928dab)",
        padding: "60px 0",
      }}>
      <div className="container">
        <h2 className="text-center mb-4 fw-bold text-primary">My Projects</h2>
        <p className="text-center text-white mb-5">Here are some projects I've built recently.</p>
        <div className="row g-4">
          {projects.map((project, idx) => (
            <div className="col-md-6 col-lg-4" key={idx}>
              <ProjectCard project={project} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
