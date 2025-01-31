import React, { useState } from "react";
import "./ProjectModal.css";
import closeIcon from "../../../assets/close-icon.svg";
import arrow from "../../../assets/right-arrow-next-svgrepo-com.svg";

const ProjectModal = ({ activeModal, onClose, card }) => {
  if (
    !activeModal ||
    !card ||
    !card.work_images ||
    card.work_images.length === 0
  ) {
    return null;
  }

  const [currentIndex, setCurrentIndex] = useState(0);
  const images = card.work_images;

  const nextImage = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const prevImage = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  return (
    <div className={`modal ${activeModal ? "modal_opened" : ""}`}>
      <div className="modal-content modal-content_img">
        <button onClick={onClose} type="button" className="modal-close">
          <img src={closeIcon} alt="Close" className="modal-close_img" />
        </button>

        <div className="modal-image-container">
          <button className="modal-prev-btn" onClick={prevImage}>
            <img src={arrow} alt="Previous" className="modal-arrow_left" />
          </button>

          <img
            src={images[currentIndex]}
            alt="Project"
            className="modal-project_img"
          />

          <button className="modal-next-btn" onClick={nextImage}>
            <img src={arrow} alt="Next" className="modal-arrow_right" />
          </button>
        </div>

        <p className="image-counter">
          {currentIndex + 1} / {images.length}
        </p>
      </div>
    </div>
  );
};

export default ProjectModal;
