import { FileDown } from "lucide-react";
import { profile } from "../data/profile";
import { useReveal } from "../hooks/useReveal";
import "./Resume.css";

export default function Resume() {
  const ref = useReveal();

  return (
    <section id="resume" className="section">
      <div className="container">
        <div ref={ref} className="resume-card card reveal">
          <div>
            <h2>Resume</h2>
            <p>
              Get a full overview of my education, skills, and projects in
              one PDF.
            </p>
          </div>
          <a href={profile.resumePath} className="btn btn-primary" download>
            <FileDown size={18} />
            Download My Resume
          </a>
        </div>
      </div>
    </section>
  );
}
