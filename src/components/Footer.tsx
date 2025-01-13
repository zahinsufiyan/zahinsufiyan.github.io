import React from "react";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import EmailIcon from "@mui/icons-material/Email";
import "../assets/styles/Footer.scss";

function Footer() {
  return (
    <footer>
      <div className="footer-links">
        <a href="mailto:zahinsufiyan316@gmail.com" target="_blank" rel="noreferrer">
          <EmailIcon fontSize="large" />
        </a>
        <a href="https://github.com/zahinsufiyan" target="_blank" rel="noreferrer">
          <GitHubIcon fontSize="large" />
        </a>
        <a
          href="https://www.linkedin.com/in/zahin-sufiyan-b03869147/"
          target="_blank"
          rel="noreferrer"
        >
          <LinkedInIcon fontSize="large" />
        </a>
      </div>
      <p>
        Built by{" "}
        <a href="https://github.com/zahinsufiyan" target="_blank" rel="noreferrer">
          Zahin Sufiyan
        </a>
      </p>
    </footer>
  );
}

export default Footer;
