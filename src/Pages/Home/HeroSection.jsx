export default function HeroSection() {
    return (
      <section id="heroSection" className="hero--section">
        <div className="hero--section--content--box">
          <div className="hero--section--content">
            <p className="section--title">Hi, I'm Bianca! </p>
            <h1 className="hero--section--title">
              <span className="hero--section-title--color">Software Engineer</span>{" "}
              <br />
              
            </h1>
            <p className="hero--section-description">
            Software engineer who loves solving problems and building cool stuff for the web.
            Comfortable with both front-end and back-end development.
            Always learning something new and improving my skills.
            Excited to work on real-world projects and grow with a great team.


              <br /> More details are all in my resume below!
            </p>
          </div>
          <a href="https://bold.pro/my/bianca-nagata" target="_blank" rel="noopener noreferrer">
  <button className="btn btn-primary">Check Resume</button>
</a>
        </div>
        <div className="hero--section--img">
          <img src="./img/hero_img.png" alt="Hero Section" />
        </div>
      </section>
    );
  }
  