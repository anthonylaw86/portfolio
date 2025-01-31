import React, { useState, useEffect, useRef } from "react";
import NavBar from "./Components/NavBar/NavBar";
import Hero from "./Components/Hero/Hero";
import About from "./Components/About/About";
import MyWork from "./Components/MyWork/MyWork";
import Contact from "./Components/Contact/Contact";
import Footer from "./Components/Footer/Footer";
import ProjectModal from "./Components/ProjectModal/ProjectModal";

const App = () => {
  const [activeModal, setActiveModal] = useState(false);
  const [selectedCard, setSelectedCard] = useState({});

  const navBarRef = useRef(null);
  const heroRef = useRef(null);
  const aboutRef = useRef(null);
  const workRef = useRef(null);
  const contactRef = useRef(null);
  const footerRef = useRef(null);

  useEffect(() => {
    const footerObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            // If the footer is in view, scroll to it
            footerRef.current.scrollIntoView({ behavior: "smooth" });
          }
        });
      },
      { threshold: 1.0 } // Trigger when the footer is fully in view
    );

    if (footerRef.current) {
      footerObserver.observe(footerRef.current);
    }

    return () => {
      if (footerRef.current) {
        footerObserver.unobserve(footerRef.current);
      }
    };
  }, []);

  const closeActiveModal = () => {
    setActiveModal(false);
  };

  const handleCardClick = (card) => {
    setSelectedCard(card);
    setActiveModal(true);
  };

  const handleNavigate = (section) => {
    if (section === "navBar")
      navBarRef.current.scrollIntoView({ behavior: "smooth" });
    if (section === "hero")
      heroRef.current.scrollIntoView({ behavior: "smooth" });
    if (section === "about")
      aboutRef.current.scrollIntoView({ behavior: "smooth" });
    if (section === "work")
      workRef.current.scrollIntoView({ behavior: "smooth" });
    if (section === "contact")
      contactRef.current.scrollIntoView({ behavior: "smooth" });
    if (section === "footer") {
      footerRef.current.scrollIntoView({ behavior: "smooth" });
      // Optionally, you can also scroll to the top of the footer
      window.scrollTo(0, document.body.scrollHeight); // Scroll to the bottom of the page
    }
  };

  return (
    <>
      <div className="snap-scroll-container">
        <NavBar onNavigate={handleNavigate} className="snap-section_header" />
        <div ref={heroRef} className="snap-section" id="hero">
          <Hero />
        </div>
        <div ref={aboutRef} className="snap-section" id="about">
          <About />
        </div>
        <div ref={workRef} className="snap-section" id="work">
          <MyWork onCardClick={handleCardClick} />
        </div>
        <div ref={contactRef} className="snap-section" id="contact">
          <Contact />
        </div>
        <div ref={footerRef} className="snap-section_footer">
          <Footer />
        </div>
      </div>

      {activeModal && (
        <ProjectModal
          onClose={closeActiveModal}
          activeModal={activeModal}
          card={selectedCard}
        />
      )}
    </>
  );
};

export default App;
