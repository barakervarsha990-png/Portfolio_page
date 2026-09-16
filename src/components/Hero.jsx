import { Github, Linkedin, ArrowDown } from "lucide-react";
import { profile } from "../data/profile";
import { useTypewriter } from "../hooks/useTypewriter";
import "./Hero.css";

const terminalLines = [
  { text: "whoami", pause: 300 },
  { text: "> Varsha Baraker", pause: 500 },
  { text: "status --current", pause: 300 },
  { text: "> Open to internships & entry-level SDE roles", pause: 600 },
];

export default function Hero() {
  const { output } = useTypewriter(terminalLines, { speed: 26 });

  return (
    <section id="home" className="hero">
      <div className="container hero-grid">
        <div className="hero-copy">
          <p className="hero-eyebrow">Hi, I'm Varsha 👋</p>
          <h1 className="hero-title">{profile.role}</h1>
          <p className="hero-tagline">{profile.tagline}</p>

          <div className="hero-actions">
            <a href="#projects" className="btn btn-primary">
              View My Projects
            </a>
            <a href={profile.resumePath} className="btn btn-outline" download>
              Download Resume
            </a>
            <a href="#contact" className="btn btn-ghost">
              Contact Me
            </a>
          </div>

          <div className="hero-social">
            <a
              href={profile.github}
              target="_blank"
              rel="noreferrer"
              aria-label="GitHub profile"
            >
              <Github size={20} />
            </a>
            <a
              href={profile.linkedin}
              target="_blank"
              rel="noreferrer"
              aria-label="LinkedIn profile"
            >
              <Linkedin size={20} />
            </a>
          </div>
        </div>

        <div className="hero-terminal" aria-hidden="true">
          <div className="hero-terminal-bar">
            <span className="dot dot-red" />
            <span className="dot dot-amber" />
            <span className="dot dot-green" />
            <span className="hero-terminal-title">varsha@portfolio</span>
          </div>
          <div className="hero-terminal-body">
            {output.map((line, i) => (
              <p key={i} className={line.startsWith(">") ? "is-output" : ""}>
                {!line.startsWith(">") && line ? (
                  <span className="prompt">$ </span>
                ) : null}
                {line}
              </p>
            ))}
            <span className="cursor" />
          </div>
        </div>
      </div>

      <a href="#about" className="hero-scroll-cue" aria-label="Scroll to About section">
        <ArrowDown size={18} />
      </a>
    </section>
  );
}
