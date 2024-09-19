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
      <div>
        <NavBar />
        <Hero />
        <About />
        <MyWork onCardClick={handleCardClick} />
        <Contact />
        <Footer />
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
