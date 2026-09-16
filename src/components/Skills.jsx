import { useReveal } from "../hooks/useReveal";
import { skillGroups } from "../data/skills";
import "./Skills.css";

export default function Skills() {
  const ref = useReveal();

  return (
    <section id="skills" className="section">
      <div className="container">
        <div className="section-head">
          <h2>Skills</h2>
          <p>Technologies and tools I use and am comfortable working with.</p>
        </div>

        <div ref={ref} className="skills-grid reveal">
          {skillGroups.map((group) => (
            <div key={group.id} className="skills-group card">
              <h3>{group.label}</h3>
              <ul className="skills-badges">
                {group.skills.map((skill) => (
                  <li key={skill} className="tag">
                    {skill}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
