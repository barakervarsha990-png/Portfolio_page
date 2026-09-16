import { Github, ExternalLink, ShieldCheck, Code2 } from "lucide-react";
import { projects } from "../data/projects";
import { useReveal } from "../hooks/useReveal";
import "./Projects.css";

function ProjectCard({ project }) {
  const ref = useReveal();
  const Icon = project.featured ? ShieldCheck : Code2;

  return (
    <article
      ref={ref}
      className={`project-card reveal ${project.featured ? "project-card-featured" : ""}`}
    >
      {project.featured && <span className="project-badge">Featured Project</span>}

      <div className="project-icon">
        <Icon size={22} />
      </div>

      <h3>{project.title}</h3>
      {project.subtitle && <p className="project-subtitle">{project.subtitle}</p>}
      <p className="project-desc">{project.description}</p>

      {project.algorithms && (
        <div className="project-meta">
          <span className="project-meta-label">Algorithms</span>
          <span>{project.algorithms.join(", ")}</span>
        </div>
      )}

      {project.highlights && (
        <ul className="project-highlights">
          {project.highlights.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      )}

      <div className="project-tech">
        {project.tech.map((t) => (
          <span key={t} className="tag">
            {t}
          </span>
        ))}
      </div>

      <div className="project-actions">
        <a
          href={project.githubUrl}
          target="_blank"
          rel="noreferrer"
          className="btn btn-outline"
        >
          <Github size={16} />
          GitHub
        </a>
        <a
          href={project.demoUrl}
          target="_blank"
          rel="noreferrer"
          className="btn btn-primary"
        >
          <ExternalLink size={16} />
          Live Demo
        </a>
      </div>
    </article>
  );
}

export default function Projects() {
  const featured = projects.find((p) => p.featured);
  const rest = projects.filter((p) => !p.featured);

  return (
    <section id="projects" className="section">
      <div className="container">
        <div className="section-head">
          <h2>Projects</h2>
          <p>A few things I've built while learning to combine AI/ML with full-stack development.</p>
        </div>

        {featured && <ProjectCard project={featured} />}

        <div className="projects-grid">
          {rest.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
}
