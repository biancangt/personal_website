import React from "react";

export default function Footer() {
  return (
    <footer
      style={{
        backgroundColor: "#1e1e2f",
        color: "#eee",
        padding: "30px 20px",
        textAlign: "center",
        fontFamily: "Arial, sans-serif",
        fontSize: "0.9rem",
      }}
    >
      <p>
                &copy; 2025 . Website developed by{' '}
                <a href="https://biancangt.netlify.app/" target="_blank" rel="noopener noreferrer" style={{ color: "#eee", textDecoration: "underline" }}>
                  BNgt
                </a>
              </p>
      <a
        href="https://github.com/biancangt/personal_website"
        target="_blank"
        rel="noopener noreferrer"
        style={{ color: "#eee", textDecoration: "underline" }}
      >
        View Source Code
      </a>
    </footer>
  );
}
