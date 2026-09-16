import { useState } from "react";
import { Mail, Github, Linkedin, Send } from "lucide-react";
import { profile } from "../data/profile";
import { useReveal } from "../hooks/useReveal";
import "./Contact.css";

const initialForm = { name: "", email: "", message: "" };

export default function Contact() {
  const ref = useReveal();
  const [form, setForm] = useState(initialForm);
  const [errors, setErrors] = useState({});
  const [status, setStatus] = useState("idle"); // idle | sent

  function handleChange(e) {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  }

  function validate() {
    const nextErrors = {};
    if (!form.name.trim()) nextErrors.name = "Please enter your name.";
    if (!form.email.trim()) {
      nextErrors.email = "Please enter your email.";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) {
      nextErrors.email = "Please enter a valid email address.";
    }
    if (!form.message.trim()) nextErrors.message = "Please enter a message.";
    return nextErrors;
  }

  function handleSubmit(e) {
    e.preventDefault();
    const nextErrors = validate();
    setErrors(nextErrors);
    if (Object.keys(nextErrors).length > 0) return;

    // This form is frontend-only for now — see the note below the form
    // for how to wire it up to a real email service.
    setStatus("sent");
    setForm(initialForm);
  }

  return (
    <section id="contact" className="section">
      <div className="container">
        <div className="section-head">
          <h2>Contact</h2>
          <p>Have an opportunity or question? I'd like to hear from you.</p>
        </div>

        <div ref={ref} className="contact-grid reveal">
          <div className="contact-info">
            <a href={`mailto:${profile.email}`} className="contact-link">
              <Mail size={18} />
              <span>{profile.email}</span>
            </a>
            <a
              href={profile.linkedin}
              target="_blank"
              rel="noreferrer"
              className="contact-link"
            >
              <Linkedin size={18} />
              <span>LinkedIn</span>
            </a>
            <a
              href={profile.github}
              target="_blank"
              rel="noreferrer"
              className="contact-link"
            >
              <Github size={18} />
              <span>GitHub</span>
            </a>
          </div>

          <form className="contact-form card" onSubmit={handleSubmit} noValidate>
            <div className="form-field">
              <label htmlFor="name">Name</label>
              <input
                id="name"
                name="name"
                type="text"
                value={form.name}
                onChange={handleChange}
                aria-invalid={Boolean(errors.name)}
                aria-describedby={errors.name ? "name-error" : undefined}
              />
              {errors.name && (
                <span id="name-error" className="form-error">
                  {errors.name}
                </span>
              )}
            </div>

            <div className="form-field">
              <label htmlFor="email">Email</label>
              <input
                id="email"
                name="email"
                type="email"
                value={form.email}
                onChange={handleChange}
                aria-invalid={Boolean(errors.email)}
                aria-describedby={errors.email ? "email-error" : undefined}
              />
              {errors.email && (
                <span id="email-error" className="form-error">
                  {errors.email}
                </span>
              )}
            </div>

            <div className="form-field">
              <label htmlFor="message">Message</label>
              <textarea
                id="message"
                name="message"
                rows={5}
                value={form.message}
                onChange={handleChange}
                aria-invalid={Boolean(errors.message)}
                aria-describedby={errors.message ? "message-error" : undefined}
              />
              {errors.message && (
                <span id="message-error" className="form-error">
                  {errors.message}
                </span>
              )}
            </div>

            <button type="submit" className="btn btn-primary">
              <Send size={16} />
              Send Message
            </button>

            {status === "sent" && (
              <p className="form-note form-success" role="status">
                Thanks — this demo form doesn't send messages yet. Connect it
                to an email service (see note below) to receive real
                submissions.
              </p>
            )}

            <p className="form-note">
              This form is frontend-only for now. To make it functional,
              connect it to a service like{" "}
              <a href="https://www.emailjs.com/" target="_blank" rel="noreferrer">
                EmailJS
              </a>
              , <a href="https://formspree.io/" target="_blank" rel="noreferrer">Formspree</a>,
              or a small backend endpoint that emails you the submission.
            </p>
          </form>
        </div>
      </div>
    </section>
  );
}
