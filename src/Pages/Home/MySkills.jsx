import React, { useState, useEffect } from "react";
import data from "../../data/index.json";

function ReadMore({ text }) {
  const [isExpanded, setIsExpanded] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    function handleResize() {
      setIsMobile(window.innerWidth <= 1200);
    }

    handleResize(); // Set initial value
    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  if (!isMobile) {
    // On desktop: just show full text, no toggling
    return <p className="skills--section--description">{text}</p>;
  }

  // On mobile: show toggleable description
  return (
    <div>
      {!isExpanded && (
        <button
          onClick={() => setIsExpanded(true)}
          style={{
            background: "none",
            border: "none",
            color: "#007bff",
            cursor: "pointer",
            padding: 0,
            fontSize: "inherit",
            textDecoration: "underline",
            outline: "none",
            boxShadow: "none",
          }}
          aria-expanded={isExpanded}
        >
          Read more
        </button>
      )}
      <p
        className="skills--section--description"
        style={{ display: isExpanded ? "block" : "none" }}
      >
        {text}{" "}
        <button
          onClick={() => setIsExpanded(false)}
          style={{
            background: "none",
            border: "none",
            color: "#007bff",
            cursor: "pointer",
            padding: 0,
            fontSize: "inherit",
            textDecoration: "underline",
            outline: "none",
            boxShadow: "none",
          }}
          aria-expanded={isExpanded}
        >
          Read less
        </button>
      </p>
    </div>
  );
}

export default function MySkills() {
  return (
    <section className="skills--section" id="mySkills">
      <div className="portfolio--container">
        <p className="section--title"></p>
        <h2 className="skills--section--heading">Skills</h2>
      </div>
      <div className="skills--section--container">
        {data?.skills?.map((item, index) => (
          <div key={index} className="skills--section--card">
            <div className="skills--section--img">
              <img src={item.src} alt={item.title} />
            </div>
            <div className="skills--section--card--content">
              <h3 className="skills--section--title">{item.title}</h3>
              <ReadMore text={item.description} />
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
