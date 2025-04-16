import React, { useState } from "react";
import { plantsPhotos } from "./plantsData";
import "./Plants.css";

const Plants = () => {
  const [selectedType, setSelectedType] = useState("All");

  const plantTypes = ["All", "Indoor", "Outdoor"];

  const filteredPhotos =
    selectedType === "All"
      ? plantsPhotos
      : plantsPhotos.filter((photo) => photo.type === selectedType);

  return (
    <div className="plants-section">
      <h2>My Plants</h2>
      <p className="section-description">
        A collection of my indoor and outdoor plants, each with its own story.
      </p>

      <div className="category-filter">
        {plantTypes.map((type) => (
          <button
            key={type}
            className={`filter-button ${selectedType === type ? "active" : ""}`}
            onClick={() => setSelectedType(type)}
          >
            {type}
          </button>
        ))}
      </div>

      <div className="masonry-grid">
        {filteredPhotos.map((photo) => (
          <div key={photo.id} className="photo-card">
            <div className="photo-container">
              <img src={photo.src} alt={photo.alt} />
              <div className="photo-overlay">
                <div className="photo-info">
                  <h3>{photo.caption}</h3>
                  <span className="category-tag">{photo.type}</span>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Plants;
