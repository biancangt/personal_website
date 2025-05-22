import React from "react";
import {
  FaJsSquare,
  FaPython,
  FaNodeJs,
  FaReact,
  FaGitAlt,
  FaHtml5,
  FaBootstrap,
  FaGithub,
  FaSlack,
} from "react-icons/fa";

import {
  SiTypescript,
  SiCss3,
  SiNetlify,
  SiJinja,
  SiMysql,
  SiPostgresql,
  SiInsomnia,
  SiTailwindcss,
  SiVite,
  SiMongodb,
  SiSqlite,
  SiRender,
  SiGooglecloud,
  SiHeroku,
} from "react-icons/si";

const skills = [
  { title: "JavaScript", icon: <FaJsSquare color="#F7DF1E" /> },
  { title: "TypeScript", icon: <SiTypescript color="#3178C6" /> },
  { title: "CSS3", icon: <SiCss3 color="#2965f1" /> },
  { title: "Python", icon: <FaPython color="#3776AB" /> },
  { title: "Render", icon: <SiRender color="#FF3E00" /> },
  { title: "Netlify", icon: <SiNetlify color="#00C7B7" /> },
  { title: "Bootstrap", icon: <FaBootstrap color="#7952B3" /> },
  { title: "Jinja", icon: <SiJinja color="#B41717" /> },
  { title: "NodeJS", icon: <FaNodeJs color="#339933" /> },
  { title: "React", icon: <FaReact color="#61DAFB" /> },
  { title: "React Native", icon: <FaReact color="#61DAFB" /> },
  { title: "MySQL", icon: <SiMysql color="#4479A1" /> },
  { title: "Postgres", icon: <SiPostgresql color="#336791" /> },
  { title: "GitHub", icon: <FaGithub /> },
  { title: "HTML5", icon: <FaHtml5 color="#E34F26" /> },
  { title: "Flask", icon: <FaPython color="#3776AB" /> },
  { title: "Slack", icon: <FaSlack color="#4A154B" /> },
  { title: "Heroku", icon: <SiHeroku color="#6762A6" /> },
  { title: "Google Cloud", icon: <SiGooglecloud color="#4285F4" /> },
  { title: "Insomnia", icon: <SiInsomnia color="#4AB6E9" /> },
  { title: "TailwindCSS", icon: <SiTailwindcss color="#38B2AC" /> },
  { title: "Vite", icon: <SiVite color="#646CFF" /> },
  { title: "MongoDB", icon: <SiMongodb color="#47A248" /> },
  { title: "SQLite", icon: <SiSqlite color="#003B57" /> },
  { title: "Git", icon: <FaGitAlt color="#F05032" /> },
];

export default function MySkills() {
  return (
    <section id="mySkills" className="skills--section">
      <div className="skills--section--content">
        <h2 className="skills-section--heading">Skills</h2>
        <p className="skills--section-description">Technologies I work with:</p>
      </div>

      <div
        className="skills--icons--grid"
        style={{
          display: "flex",
          flexWrap: "wrap",
          padding: "0px 5%",
          gap: "24px",
        }}
      >
        {skills.map(({ title, icon }, index) => (
          <div
            key={index}
            style={{
              flex: "1 0 80px",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
              gap: "8px",
              textAlign: "center",
              cursor: "default",
              transition: "transform 0.3s ease",
              color: "inherit",
            }}
          >
            <div style={{ fontSize: "3rem" }}>{icon}</div>
            <p style={{ fontSize: "0.9rem", margin: 0 }}>{title}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
