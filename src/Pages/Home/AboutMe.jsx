export default function AboutMe() {
  return (
    <section id="AboutMe" className="about--section">
      <div className="about--section--img hide-on-mobile">
        <img src="./img/about-me.png" alt="About Me" />
      </div>
      <div className="hero--section--content--box about--section--box">
        <div className="hero--section--content">
          <h2 className="skills-section--heading">About Me</h2>
          <p className="hero--section-description">
            Hi! I'm a developer from Brazil, fluent in both Portuguese and English. From a young age, I’ve always been drawn to logical thinking, puzzles, and creative challenges—this natural curiosity is what led me to pursue a path in Computer Science and Software Development.
          </p>
          <p className="hero--section-description">
            I have a collection of more than 60 Rubik’s Cubes, and I love the mix of logic, patience, and strategy it takes to solve them. That same mindset fuels my approach to coding: thoughtful, persistent, and always looking for elegant solutions.
          </p>
          <p className="hero--section-description">
            Outside the tech world, I’m passionate about traveling, exploring new cultures, and diving into books—whether fiction or tech-related. I’m always up for a challenge, constantly learning, and excited about building meaningful, user-focused digital experiences.
          </p>
        </div>
      </div>
    </section>
  );
}
