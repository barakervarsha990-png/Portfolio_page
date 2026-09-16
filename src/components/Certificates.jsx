import { useState } from "react";
import { Award } from "lucide-react";
import { certificates } from "../data/certificates";
import { useReveal } from "../hooks/useReveal";
import "./Certificates.css";

function CertificateCard({ certificate }) {
  const [imageFailed, setImageFailed] = useState(false);

  return (
    <div className="certificate-card card">
      <div className="certificate-image">
        {!imageFailed ? (
          <img
            src={certificate.image}
            alt={`${certificate.title} certificate`}
            onError={() => setImageFailed(true)}
          />
        ) : (
          <div className="certificate-placeholder">
            <Award size={26} />
            <span>Add image</span>
          </div>
        )}
      </div>
      <h3>{certificate.title}</h3>
      <p className="certificate-issuer">{certificate.issuer}</p>
    </div>
  );
}

export default function Certificates() {
  const ref = useReveal();

  return (
    <section id="certificates" className="section">
      <div className="container">
        <div className="section-head">
          <h2>Certificates</h2>
          <p>
            Drop each certificate image into{" "}
            <code>public/certificates/</code> to replace the placeholders below.
          </p>
        </div>

        <div ref={ref} className="certificates-grid reveal">
          {certificates.map((cert) => (
            <CertificateCard key={cert.id} certificate={cert} />
          ))}
        </div>
      </div>
    </section>
  );
}
