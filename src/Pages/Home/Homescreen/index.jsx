import AboutMe from "../AboutMe";
import Footer from "../Footer";
import HeroSection from "../HeroSection";
import MyPortfolio from "../MyPortfolio";
import MySkills from "../MySkills";
import Certification from "../Certifications";
import ContactMe from "../ContactMe";

export default function Home() {
  return (
    <>
      <HeroSection />
      <MySkills />
      <AboutMe />
      <Certification/>
      <MyPortfolio />
      <ContactMe />
      <Footer />
    </>
  );
}
