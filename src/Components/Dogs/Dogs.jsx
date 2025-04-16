import React, { useState } from "react";
import { dogsPhotos } from "./dogsData";
import "./Dogs.css";

const Dogs = () => {
  const [selectedDog, setSelectedDog] = useState("All");

  const dogNames = ["All", "Dax", "Mika", "Dax & Mika"];

  const filteredPhotos =
    selectedDog === "All"
      ? dogsPhotos
      : dogsPhotos.filter((photo) => photo.name === selectedDog);

  return (
    <div className="dogs-section">
      <h2>My Dogs</h2>
      <p className="section-description">
        Meet my furry companions who bring joy to my life every day.
      </p>

      <div className="category-filter">
        {dogNames.map((name) => (
          <button
            key={name}
            className={`filter-button ${selectedDog === name ? "active" : ""}`}
            onClick={() => setSelectedDog(name)}
          >
            {name}
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
                  <span className="category-tag">{photo.name}</span>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Dogs;
