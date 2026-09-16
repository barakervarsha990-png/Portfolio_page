import { Briefcase } from "lucide-react";
import { useReveal } from "../hooks/useReveal";
import "./Experience.css";

const experience = [
  {
    id: "codealpha",
    company: "CodeAlpha",
    role: "Python Internship",
    description:
      "Completed an online Python internship where I worked on Python-based programming tasks and projects.",
  },
];

export default function Experience() {
  const ref = useReveal();

  return (
    <section id="experience" className="section">
      <div className="container">
        <div className="section-head">
          <h2>Experience</h2>
        </div>

        <div ref={ref} className="experience-list reveal">
          {experience.map((item) => (
            <div key={item.id} className="experience-item card">
              <div className="experience-icon">
                <Briefcase size={20} />
              </div>
              <div>
                <h3>{item.role}</h3>
                <p className="experience-company">{item.company}</p>
                <p className="experience-desc">{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
