import React from "react";
import "./ListingCard.css";

const ListingCard = ({ listing }) => {
  return (
    <div className="listing-card">
      <div className="listing-image">
        <img src={listing.image} alt={listing.title} />
        <div className="listing-status">{listing.status}</div>
      </div>
      <div className="listing-details">
        <h3>{listing.title}</h3>
        <p className="listing-price">${listing.price}/month</p>
        <p className="listing-address">{listing.address}</p>
        <div className="listing-features">
          <span>{listing.bedrooms} Beds</span>
          <span>{listing.bathrooms} Baths</span>
          <span>{listing.sqft} sqft</span>
        </div>
        <p className="listing-type">{listing.type}</p>
        <p className="listing-description">{listing.description}</p>
      </div>
    </div>
  );
};

export default ListingCard;
