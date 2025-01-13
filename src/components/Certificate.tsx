import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCertificate } from "@fortawesome/free-solid-svg-icons";

const certificates = [
  {
    title: "Introduction to Large Language Models",
    organization: "Google Cloud",
    credentialId: "EHJNARANCQB3",
    date: "Issued April 2024",
    description: "A course about Large Language Models (LLMs), Google's Gen AI tools, and prompt tuning.",
  },
  {
    title: "Docker",
    organization: "Coursera Project Network",
    credentialId: "EFP54UMUKDR8",
    date: "Issued January 2024",
    description: "Understanding Docker architecture and deploying web applications as Docker containers.",
  },
  {
    title: "Neural Networks and Deep Learning",
    organization: "DeepLearning.AI",
    credentialId: "X2DYFENH6UYD",
    date: "Issued January 2021",
    description:
      "First-hand experience in Deep Learning, Artificial Neural Networks, Backpropagation, and Neural Network Architecture.",
  },
  {
    title: "Google Cloud Platform Fundamentals: Core Infrastructure",
    organization: "Google",
    credentialId: "CJVU9PS36YX5",
    date: "Issued April 2020",
    description:
      "Covered application deployment environments on Google Cloud: App Engine, Google Kubernetes Engine, and Compute Engine.",
  },
  {
    title: "Cybersecurity Compliance Framework & System Administration",
    organization: "IBM",
    credentialId: "H2C5NDC6JLT4",
    date: "Issued October 2020",
    description: "Overview of cybersecurity compliance standards such as NIST, GDPR, HIPAA, SANS, and PCI.",
  },
  {
    title: "Cybersecurity Roles, Processes & Operating System Security",
    organization: "IBM",
    credentialId: "V2R7BFPFSMW6",
    date: "Issued August 2020",
    description:
      "Explored key cybersecurity roles within organizations and virtualization concepts as they relate to cybersecurity.",
  },
  {
    title: "Introduction to Cybersecurity Tools & Cyber Attacks",
    organization: "IBM",
    credentialId: "34X8KT69E4QU",
    date: "Issued August 2020",
    description:
      "Focused on cybersecurity best practices, CIA Triad, access management, and tools like firewalls, anti-virus, and penetration testing.",
  },
];

export default function Certificate() {
  return (
    <div>
      <div id="certificate">
        <div className="research-container">
          <h1>Certifications</h1>
          <div className="research-grid">
            {certificates.map((cert, index) => (
              <div key={index} className="research-item">
                <FontAwesomeIcon icon={faCertificate} size="3x" />
                <h3>{cert.title}</h3>
                <p className="research-type">{cert.organization}</p>
                <p>
                  <strong>Credential ID:</strong> {cert.credentialId}
                </p>
                <p>
                  <strong>Date:</strong> {cert.date}
                </p>
                <p>{cert.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
