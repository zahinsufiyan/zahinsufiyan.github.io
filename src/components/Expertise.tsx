import React from "react";
import Chip from "@mui/material/Chip";
import "../assets/styles/Expertise.scss";

const skillsData = [
  {
    title: "Languages",
    techstack: ["Python", "Java", "C++", "SQL", "C", "Linux Shell Scripting"],
  },
  {
    title: "ML Frameworks and Libraries",
    techstack: ["TensorFlow", "PyTorch", "Scikit-learn", "Keras"],
  },
  {
    title: "Data Analytics Tools",
    techstack: ["Pandas", "NumPy", "Matplotlib", "Seaborn", "Tableau", "Microsoft Excel (Pivot Tables, VLOOKUP, Macros)"],
  },
  {
    title: "Cloud Platforms",
    techstack: ["AWS", "Google Cloud", "Azure"],
  },
  {
    title: "Specializations",
    techstack: [
      "Machine Learning",
      "Deep Learning",
      "Reinforcement Learning",
      "Generative Flow Networks",
      "LLM",
      "Data Science/ Data analytics",
    ],
  },
  {
    title: "Research and Development",
    techstack: [
      "Reinforcement Learning Algorithms",
      "Natural Language Processing",
      "Large Language Models",
      "Predictive Modeling",
      "System Optimization",
    ],
  },
];

function Expertise() {
  return (
    <div className="container" id="expertise">
      <div className="skills-container">
        <h1>Skills and Interests</h1>
        <div className="skills-grid">
          {skillsData.map((skill, index) => (
            <div key={index} className="skill">
              <h3>{skill.title}</h3>
              <div className="flex-chips">
                {skill.techstack.map((label, i) => (
                  <Chip key={i} className="chip" label={label} />
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Expertise;
