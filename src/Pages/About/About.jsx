import React, { useEffect } from "react";
import "./About.css";
import self1 from "../../assets/images/self/self1.png";
import headshot from "../../assets/images/self/headshot.JPG";
import self_cropped from "../../assets/images/self/self_cropped.png";

const About = () => {
  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      const windowHeight = window.innerHeight;
      const sections = document.querySelectorAll(".about-section");
      const header = document.querySelector(".about-header");

      // Calculate which section should be visible
      const sectionIndex = Math.floor(scrollPosition / windowHeight);

      // Show/hide header
      if (sectionIndex > 0) {
        header.style.opacity = "0";
      } else {
        header.style.opacity = "1";
      }

      // Update section visibility
      sections.forEach((section, index) => {
        if (index === sectionIndex - 1) {
          // Subtract 1 to account for header
          section.classList.add("visible");
        } else {
          section.classList.remove("visible");
        }
      });
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll(); // Initial check

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className="about-page">
      <div className="about-container">
        <div className="about-header">
          <h1>About Me</h1>
        </div>

        <div className="about-content">
          <div className="about-section journey-section">
            <div className="section-content">
              <h2>My Journey</h2>
              <p>
                My path to software engineering has been anything but
                conventional. With a background in graphic design and real
                estate, I&apos;ve always been drawn to creative problem-solving
                and building meaningful connections. After facing personal
                challenges, I discovered coding as a way to channel my energy
                into creating solutions and building a better future.
              </p>
            </div>
            <div className="section-image journey-image">
              <img src={headshot} alt="Anthony Law" />
            </div>
          </div>

          <div className="about-section experience-section">
            <div className="section-image experience-image">
              <img src={self_cropped} alt="Professional Work" />
            </div>
            <div className="section-content">
              <h2>Professional Experience</h2>
              <p>
                As a Full Stack Software Engineer, I combine my diverse
                background in design, real estate, and technology to create
                intuitive and impactful applications. I&apos;m currently
                contributing to VolunQueer, a startup focused on connecting
                LGBTQ+ individuals with volunteer opportunities, while also
                leveraging my real estate expertise in commercial property
                management and sales.
              </p>
            </div>
          </div>

          <div className="about-section interests-section">
            <div className="section-content">
              <h2>Beyond Code</h2>
              <p>
                When I&apos;m not coding or working in real estate, you&apos;ll
                find me in the gym, where I channel my energy into bodybuilding.
                I&apos;m also an avid plant enthusiast, dog lover, and home
                chef. My passion for art and design extends beyond the digital
                world, reflected in my appreciation for tattoos and visual
                expression.
              </p>
            </div>
            <div className="section-image interests-image">
              <img src={self1} alt="Personal Interests" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
