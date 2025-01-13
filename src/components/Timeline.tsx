import React from "react";
import "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBriefcase } from "@fortawesome/free-solid-svg-icons";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import "../assets/styles/Timeline.scss";

const careers = [
  {
    title: "Casual Research Programmer - II",
    organisation: "University of Alberta",
    location: "Edmonton, ALB, Canada",
    startdate: "January 2024",
    enddate: "Present",
    description:
      "Optimized GFlowNets for robotic systems, enhancing model efficiency by 35% and adaptability in real-world settings.",
  },
  {
    title: "Graduate Research Assistant Fellow (GRAF)",
    organisation: "University of Alberta",
    location: "Edmonton, ALB, Canada",
    startdate: "May 2022",
    enddate: "December 2023",
    description:
      "Researched RL and GFlowNets for advanced machine fault adaptation in collaboration with MELCO.",
  },
  {
    title: "Graduate Teaching Assistant (GTA)",
    organisation: "University of Alberta",
    location: "Edmonton, ALB, Canada",
    startdate: "August 2021",
    enddate: "April 2022",
    description:
      "Facilitated labs and seminars while managing grading and student support.",
  },
  {
    title: "Database Developer",
    organisation: "Hishabee Technologies Limited",
    location: "Dhaka, Bangladesh",
    startdate: "June 2020",
    enddate: "December 2020",
    description:
      "Developed data management solutions, including schema design and query optimization.",
  },
  {
    title: "Lecturer",
    organisation: "BRAC University",
    location: "Dhaka, Bangladesh",
    startdate: "January 2020",
    enddate: "April 2020",
    description:
      "Taught core Computer Science courses and supervised student projects.",
  },
  
  {
    title: "Teaching Assistant (TA)",
    organisation: "BRAC University",
    location: "Dhaka, Bangladesh",
    startdate: "August 2019",
    enddate: "December 2019",
    description:
      "Mentored students in Digital Logic Design and managed grading responsibilities.",
  },
];

function Timeline() {
  return (
    <div id="history">
      <div className="items-container">
        <h1>Work Experience</h1>
        <VerticalTimeline>
          {careers.map((career, index) => (
            <VerticalTimelineElement
              key={index}
              className="vertical-timeline-element--work"
              contentStyle={{ background: "white", color: "rgb(39, 40, 34)" }}
              contentArrowStyle={{ borderRight: "7px solid  white" }}
              date={`${career.startdate} - ${career.enddate}`}
              iconStyle={{ background: "#5000ca", color: "rgb(39, 40, 34)" }}
              icon={<FontAwesomeIcon icon={faBriefcase} />}
            >
              <h3 className="vertical-timeline-element-title">
                {career.title}
              </h3>
              <h4 className="vertical-timeline-element-subtitle">
                {career.organisation}
              </h4>
              <p className="vertical-timeline-element-subtitle">{career.location}</p>
              <p>{career.description}</p>
            </VerticalTimelineElement>
          ))}
        </VerticalTimeline>
      </div>
    </div>
  );
}

export default Timeline;
