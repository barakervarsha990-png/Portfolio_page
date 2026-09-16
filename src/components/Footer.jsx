import { Github, Linkedin, Mail } from "lucide-react";
import { profile } from "../data/profile";
import "./Footer.css";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="container footer-inner">
        <p>
          © {year} {profile.name}. Built with React &amp; Vite.
        </p>
        <div className="footer-social">
          <a href={`mailto:${profile.email}`} aria-label="Email">
            <Mail size={18} />
          </a>
          <a
            href={profile.github}
            target="_blank"
            rel="noreferrer"
            aria-label="GitHub profile"
          >
            <Github size={18} />
          </a>
          <a
            href={profile.linkedin}
            target="_blank"
            rel="noreferrer"
            aria-label="LinkedIn profile"
          >
            <Linkedin size={18} />
          </a>
        </div>
      </div>
    </footer>
  );
}
