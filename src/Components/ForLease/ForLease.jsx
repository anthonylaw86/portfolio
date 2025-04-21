import ListingCard from "../ListingCard/ListingCard";
import { properties } from "../../data/properties";
import "./ForLease.css";

const ForLease = () => {
  const handleViewDetails = (listing) => {
    // Here you can implement modal or navigation to detailed view
    console.log("Viewing details for:", listing);
  };

  return (
    <div className="for-lease-container">
      <h2>Commercial Properties For Lease</h2>
      <div className="listings-grid">
        {properties.map((listing) => (
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
