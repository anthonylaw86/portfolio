import React from "react";
import "./ProjectModal.css";
import closeIcon from "../../../assets/close-icon.svg";

const ProjectModal = ({ activeModal, onClose, card }) => {
  if (!activeModal) return null;

  return (
    <div className={`modal ${activeModal ? "modal_opened" : ""}`}>
      <div className="modal-content modal-content_img">
        <button onClick={onClose} type="button" className="modal-close">
          <img src={closeIcon} alt="" className="modal-close_img" />
        </button>
        {card && card.work_image ? (
          <img
            src={card.work_image}
            alt="Project"
            className="modal-project_img"
          />
        ) : (
          <p>No image available</p>
        )}
      </div>
    </div>
  );
};

export default ProjectModal;
