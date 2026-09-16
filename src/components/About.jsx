import { useReveal } from "../hooks/useReveal";
import "./About.css";

export default function About() {
  const ref = useReveal();

  return (
    <section id="about" className="section">
      <div className="container">
        <div ref={ref} className="about reveal">
          <div className="section-head">
            <h2>About Me</h2>
          </div>
          <div className="about-body">
            <p>
              I'm a final-year Computer Science Engineering student with a
              steady interest in Python, web development, and the AI/ML
              side of software — from building models to shipping the
              interfaces around them.
            </p>
            <p>
              Most of what I know comes from building: working through
              projects that combine a web stack with a machine learning
              component, and picking up backend and database skills along
              the way. I'm not claiming deep expertise — I'm early in my
              career and still learning — but I put in the work to
              understand what I ship.
            </p>
            <p>
              I'm currently looking for internship and entry-level
              software development opportunities where I can keep
              building, learn from experienced engineers, and contribute
              to real products.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
