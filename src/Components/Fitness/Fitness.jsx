import React, { useState } from "react";
import { fitnessPhotos } from "./fitnessData";
import "./Fitness.css";

const Fitness = () => {
  const [selectedCategory, setSelectedCategory] = useState("All");

  const categories = [
    "All",
    ...new Set(fitnessPhotos.map((photo) => photo.category)),
  ];

  const filteredPhotos =
    selectedCategory === "All"
      ? fitnessPhotos
      : fitnessPhotos.filter((photo) => photo.category === selectedCategory);

  return (
    <div className="fitness-section">
      <h2>Fitness Journey</h2>
      <p className="section-description">
        Documenting my bodybuilding journey through progress photos and
        achievements.
      </p>

      <div className="category-filter">
        {categories.map((category) => (
          <button
            key={category}
            className={`filter-button ${
              selectedCategory === category ? "active" : ""
            }`}
            onClick={() => setSelectedCategory(category)}
          >
            {category}
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
                  <p>{photo.date}</p>
                  <span className="category-tag">{photo.category}</span>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Fitness;
