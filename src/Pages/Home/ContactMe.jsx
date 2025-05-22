import React from "react";
import { FaLinkedin, FaGithub, FaEnvelope, FaSms } from "react-icons/fa";

const buttonStyle = {
  display: "flex",
  alignItems: "center",
  gap: "8px",
  padding: "10px 20px",
  fontSize: "1rem",
  backgroundColor: "#2a2a3d",
  color: "#eee",
  border: "none",
  borderRadius: "5px",
  cursor: "pointer",
};

const containerStyle = {
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  gap: "20px",
  padding: "40px 20px",
  minHeight: "100px",
  color: "#eee",
  fontFamily: "Arial, sans-serif",
};

const buttonGroupStyle = {
  display: "flex",
  gap: "16px",
  flexWrap: "wrap",
  justifyContent: "center",
};

export default function ContactMe() {
  return (
    <section id="contactMe" style={containerStyle}>
      <h2 className="skills-section--heading">Contact Me:</h2>

      <div style={buttonGroupStyle}>
        <a
          href="https://www.linkedin.com/in/biancangt"
          target="_blank"
          rel="noopener noreferrer"
          style={{ textDecoration: "none" }}
        >
          <button style={buttonStyle}>
            <FaLinkedin size={20} />
            LinkedIn
          </button>
        </a>

        <a
          href="https://github.com/biancangt"
          target="_blank"
          rel="noopener noreferrer"
          style={{ textDecoration: "none" }}
        >
          <button style={buttonStyle}>
            <FaGithub size={20} />
            GitHub
          </button>
        </a>

        <a
          href="sms:+5127663804"
          style={{ textDecoration: "none" }}
        >
          <button style={buttonStyle}>
            <FaSms size={20} />
            Text
          </button>
        </a>

        <a
          href="mailto:persons_roe_0u@icloud.com"
          target="_blank"
          rel="noopener noreferrer"
          style={{ textDecoration: "none" }}
        >
          <button style={buttonStyle}>
            <FaEnvelope size={20} />
            Email
          </button>
        </a>
      </div>
    </section>
  );
}
