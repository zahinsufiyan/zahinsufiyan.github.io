import React from "react";
import "../assets/styles/Project.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCode } from "@fortawesome/free-solid-svg-icons";

const personalProjects = [
  {
    title: "A Machine Learning Approach to Decode Neural Representation of Words within Phrases using Contextual Embeddings",
    description: [
      "Devised a model that can learn how the brain represents a word in a given context and correlate it with its accuracy in a completely different context with an adjective modifier involved.",
      "The model uses a pre-trained computational word embedding model (BERT) and PLS regression to map brain data to word representations.",
    ],
  },
  {
    title: "Tangle: Comprehensive News Aggregator App",
    description: [
      "Created an Android app that aggregates news by scraping content from major news media outlets.",
      "Features include news filtering and direct linking to source articles or videos.",
      "GitHub Link: https://github.com/zahinsufiyan/Tangle",
    ],
  },
  {
    title: "Air Pollution Mapping & Mitigation",
    description: [
      "Engineered a system to collect and analyze air quality data with a color-coded web interface for visualization.",
      "Designed to release water droplets in areas where dust particles exceed a threshold.",
      "Incorporated sensors like GP2Y1010AU0F Sharp Dust sensor, DTH11 Temperature and Humidity sensor, and gas sensors for Carbon monoxide, Hydrogen, and Methane.",
    ],
  },
];

function Project() {
  return (
    <div className="projects-container" id="projects">
      <div className="projects-content">
        <h1>Personal Projects</h1>
        <div className="projects-grid">
          {personalProjects.map((project, index) => (
            <div key={index} className="project-item">
              <FontAwesomeIcon icon={faCode} size="3x" />
              <h3>{project.title}</h3>
              <ul>
                {project.description.map((item, i) => (
                  <li key={i}>{item}</li>
                ))}
              </ul>
              {project.description.some((line) => line.includes("GitHub Link")) && (
                <a
                  href={project.description.find((line) =>
                    line.startsWith("GitHub Link")
                  )}
                  target="_blank"
                  rel="noreferrer"
                  className="project-link"
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
