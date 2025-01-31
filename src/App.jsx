import React, { useState } from "react";
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

  const closeActiveModal = () => {
    setActiveModal(false);
  };

  const handleCardClick = (card) => {
    setSelectedCard(card);
    setActiveModal(true);
  };

  return (
    <>
      <div className="snap-scroll-container">
        <NavBar />
        <Hero className="snap-section" id="hero" />
        <About className="snap-section" id="about" />
        <MyWork
          onCardClick={handleCardClick}
          className="snap-section"
          id="work"
        />
        <Contact className="snap-section" id="contact" />
        <div className="snap-section">
          <Footer className="footer" id="footer" />
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
