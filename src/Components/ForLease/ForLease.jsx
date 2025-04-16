import React, { useState } from "react";
import ListingCard from "../ListingCard/ListingCard";
import { property9149 } from "../../assets/images/realEstate/9149D/9149Data";
import "./ForLease.css";

const ForLease = () => {
  const [selectedListing, setSelectedListing] = useState(null);

  const listings = [property9149];

  const handleViewDetails = (listing) => {
    setSelectedListing(listing);
    // Here you can implement modal or navigation to detailed view
    console.log("Viewing details for:", listing);
  };

  return (
    <div className="for-lease-container">
      <h2>Commercial Properties For Lease</h2>
      <div className="listings-grid">
        {listings.map((listing) => (
          <ListingCard
            key={listing.id}
            listing={listing}
            onViewDetails={handleViewDetails}
          />
        ))}
      </div>
    </div>
  );
};

export default ForLease;
