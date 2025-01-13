import React from "react";
import "../assets/styles/Project.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCode } from "@fortawesome/free-solid-svg-icons";

const personalProjects = [
  {
    title: "A Machine Learning Approach to Decode Neural Representation of Words within Phrases using Contextual Embeddings",
    type: "Research Project",
    technologies: "Python, BERT, PLS Regression",
    date: "2021",
    description: "Devised a model to learn brain representations of words in context using BERT and PLS regression.",
  },
  {
    title: "Tangle: Comprehensive News Aggregator App",
    type: "Mobile Application",
    technologies: "Android, Web Scraping, Java",
    date: "2020",
    description: "Created an app to aggregate and filter news with direct linking to sources.",
    link: "https://github.com/zahinsufiyan/Tangle",
  },
  {
    title: "Air Pollution Mapping & Mitigation",
    type: "IoT Project",
    technologies: "C, Sensors, Web Interface",
    date: "2019",
    description: "Developed a system to monitor air quality and mitigate pollution with automated responses.",
  },
];

function Project() {
  return (
    <div className="projects-container" id="projects">
      <div className="research-container">
        <h1>Personal Projects</h1>
        <div className="research-grid">
          {personalProjects.map((project, index) => (
            <div key={index} className="research-item">
              <FontAwesomeIcon icon={faCode} size="3x" />
              <h3>{project.title}</h3>
              <p className="research-type">{project.type}</p>
              <div className="research-details">
                <span className="research-published">
                  <strong>Technologies:</strong> {project.technologies}
                </span>
                <span className="research-date">
                  <strong>Date:</strong> {project.date}
                </span>
              </div>
              <p>{project.description}</p>
              {project.link && (
                <a
                  href={project.link}
                  target="_blank"
                  rel="noreferrer"
                  className="research-link"
                >
                  View on GitHub
                </a>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Project;
