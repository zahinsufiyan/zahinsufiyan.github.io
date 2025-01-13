import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGraduationCap } from "@fortawesome/free-solid-svg-icons";
import "../assets/styles/Education.scss";

const educationData = [
  {
    degree: "Master of Science in Computing Science",
    institution: "University of Alberta",
    location: "Edmonton, AB, Canada",
    startdate: "September 2021",
    enddate: "December 2023",
    description: `
      
      Thesis: A Study of the Efficacy of Generative Flow Networks and RL for Robotics and Machine Fault-Adaptation.
    `,
  },
  {
    degree: "Bachelor of Science in Computer Science and Engineering",
    institution: "BRAC University",
    location: "Dhaka, Bangladesh",
    startdate: "January 2016",
    enddate: "December 2019",
    description: `
      Thesis: Secured IOTA Crypto-Platform with Discretionary Mining and Auction-Based Miner Nomination.
    `,
  },
];

function Education() {
  return (
    <div className="container" id="education">
      <div className="education-container">
        <h1>Education History</h1>
        <div className="education-grid">
          {educationData.map((edu, index) => (
            <div key={index} className="education-item">
              <FontAwesomeIcon icon={faGraduationCap} size="3x" />
              <h3>{edu.degree}</h3>
              <p>{edu.institution}</p>
              <p>{edu.location}</p>
              <div className="education-details">
                <span className="education-years">
                  {edu.startdate} - {edu.enddate}
                </span>
                <p>{edu.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Education;
