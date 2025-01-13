import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFileAlt } from "@fortawesome/free-solid-svg-icons";
import "../assets/styles/Research.scss";

const researchWorks = [
  {
    title: "A Study of the Efficacy of Generative Flow Networks for Robotics and Machine Fault-Adaptation",
    type: "Engineering Applications of Artificial Intelligence (Proceeding)",
    published: "Edmonton, Alberta",
    date: "July 2024",
    description: `
      Investigated the efficacy of Generative Flow Networks (GFlowNets/CFlowNets) for machine fault adaptation in robotic environments, 
      performing comparative analysis with state-of-the-art RL algorithms, and exploring knowledge transfer for real-world deployment.
    `,
    link: "https://doi.org/10.48550/arXiv.2501.03405",
  },
  {
    title: "Enhancing Reinforcement Learning Planning with Large Language Models",
    type: "Survey Paper (In Progress)",
    published: "University of Alberta",
    date: "2024 - Present",
    description: `
      Conducting a survey on integrating Large Language Models (LLMs) in Reinforcement Learning (RL) for enhanced planning, 
      developing a taxonomy, and analyzing state-of-the-art papers. Expected submission by mid-2025.
    `,
  },
  {
    title: "Developing a Triage Predictive Model for Access to a Spinal Surgeon Using Clinical Variables and Natural Language Processing of Radiology Reports",
    type: "European Spine Journal",
    published: "Edmonton, Alberta",
    date: "January 2023",
    description: `
      Developed a predictive model utilizing NLP on MRI reports, improving surgical need assessment and reducing unnecessary referrals.
    `,
    link: "https://link.springer.com/article/10.1007/s00586-023-07552-4",
  },
  {
    title: "Discretionary Mining Algorithm on a Virtually Minerless Environment for Secured Blockchain-Based IOTA Enabled Microtransaction",
    type: "IEEE REGION 10 SYMPOSIUM (TENSYMP)",
    published: "Dhaka, Bangladesh",
    date: "June 2020",
    description: `
      Enhanced blockchain efficiency with a novel Discretionary Mining Algorithm for IOTA, improving Transactions Per Second (TPS) 
      and addressing scalability challenges.
    `,
    link: "https://ieeexplore.ieee.org/document/9230882",
  },
];

function ResearchWorks() {
  return (
    <div id="research">
      <div className="research-container">
        <h1>Research Experience and Publications</h1>
        <div className="research-grid">
          {researchWorks.map((work, index) => (
            <div key={index} className="research-item">
              <FontAwesomeIcon icon={faFileAlt} size="3x" />
              <h3>{work.title}</h3>
              <p className="research-type">{work.type}</p>
              <div className="research-details">
                <span className="research-published">
                  <strong>Published:</strong> {work.published}
                </span>
                <span className="research-date">
                  <strong>Date:</strong> {work.date}
                </span>
              </div>
              <p>{work.description}</p>
              {work.link && (
                <a
                  href={work.link}
                  target="_blank"
                  rel="noreferrer"
                  className="research-link"
                >
                  View Publication
                </a>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default ResearchWorks;
