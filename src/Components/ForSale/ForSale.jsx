import React, { useState } from "react";
import ListingCard from "../ListingCard/ListingCard";
import "./ForSale.css";

const ForSale = () => {
  const [selectedListing, setSelectedListing] = useState(null);
  const properties = []; // Empty array for now

  const handleViewDetails = (listing) => {
    setSelectedListing(listing);
    // Here you can implement modal or navigation to detailed view
    console.log("Viewing details for:", listing);
  };

  return (
    <div className="for-sale-container">
      <h2>Properties For Sale</h2>
      {properties.length > 0 ? (
        <div className="properties-grid">
          {properties.map((property) => (
            <ListingCard
              key={property.id}
              listing={property}
              onViewDetails={handleViewDetails}
            />
          ))}
        </div>
      ) : (
        <div className="coming-soon">
          <h3>Coming Soon</h3>
          <p>
            We're currently working on adding new properties for sale. Please
            check back soon!
          </p>
          <p>
            In the meantime, feel free to <a href="/contact">contact us</a> to
            discuss your property needs.
          </p>
        </div>
      )}
    </div>
  );
};

export default ForSale;
