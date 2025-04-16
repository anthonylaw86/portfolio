import React, { useState } from "react";
import PropTypes from "prop-types";
import "./ListingCard.css";

const ListingCard = ({ listing }) => {
  const [showModal, setShowModal] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [showContactForm, setShowContactForm] = useState(false);
  const [result, setResult] = useState("");

  if (!listing) return null;

  const {
    images = [],
    title = "",
    status = "",
    price = 0,
    address = "",
    squareFootage = 0,
    propertyType = "",
    description = "",
    features = [],
    zoning = "",
    parking = 0,
    yearBuilt = "",
    additionalFees = {},
  } = listing;

  const monthlyPrice = Math.round(price / 12);
  const pricePerSqFt = price / squareFootage;

  const formatPrice = (price, status) => {
    if (status.toLowerCase().includes("lease")) {
      return `$${Math.round(price / 12).toLocaleString()}/month`;
    }
    return `$${price.toLocaleString()}`;
  };

  const calculateTotalMonthlyCost = () => {
    const baseRent = monthlyPrice;
    const cam = additionalFees.cam || 0;
    const propertyTaxes = additionalFees.propertyTaxes || 0;
    const fireSuspension = additionalFees.fireSuspension || 0;
    return baseRent + cam + propertyTaxes + fireSuspension;
  };

  const handleNextImage = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
  };

  const handlePrevImage = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  const handleContactSubmit = async (e) => {
    e.preventDefault();
    setResult("Sending....");
    const formData = new FormData(e.target);

    formData.append("access_key", "8da0e542-818e-46cd-9669-e8a476d06111");
    formData.append("subject", `Inquiry about ${title}`);
    formData.append("from_name", formData.get("name"));
    formData.append("reply_to", formData.get("email"));

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData,
    });

    const data = await response.json();

    if (data.success) {
      setResult("Form Submitted Successfully");
      e.target.reset();
      setShowContactForm(false);
      alert("Thank you for your interest! I'll get back to you soon.");
    } else {
      console.log("Error", data);
      setResult(data.message);
      alert("There was an error submitting the form. Please try again.");
    }
  };

  return (
    <>
      <div className="listing-card">
        <div className="listing-image">
          {images.length > 0 && <img src={images[0].src} alt={images[0].alt} />}
          {status && <span className="listing-status">{status}</span>}
        </div>
        <div className="listing-details">
          {title && <h3>{title}</h3>}
          <div className="listing-price">
            {formatPrice(price, status)}
            <span className="price-per-sqft">
              (${pricePerSqFt.toFixed(2)}/sq ft annually)
            </span>
          </div>
          {address && <div className="listing-address">{address}</div>}

          <div className="listing-features">
            {squareFootage > 0 && (
              <span>{squareFootage.toLocaleString()} sq ft</span>
            )}
            {propertyType && <span>{propertyType}</span>}
            {zoning && <span>{zoning}</span>}
            {parking > 0 && <span>{parking} parking spaces</span>}
            {yearBuilt && <span>Built {yearBuilt}</span>}
          </div>

          {Object.keys(additionalFees).length > 0 && (
            <div className="additional-fees">
              <h4>Additional Monthly Fees:</h4>
              <ul>
                {additionalFees.cam && (
                  <li>CAM: ${additionalFees.cam.toLocaleString()}</li>
                )}
                {additionalFees.propertyTaxes && (
                  <li>
                    Property Taxes: $
                    {additionalFees.propertyTaxes.toLocaleString()}
                  </li>
                )}
                {additionalFees.fireSuspension && (
                  <li>
                    Fire Suspension: $
                    {additionalFees.fireSuspension.toLocaleString()}
                  </li>
                )}
                <li className="total-cost">
                  Total Monthly Cost: $
                  {calculateTotalMonthlyCost().toLocaleString()}
                </li>
              </ul>
            </div>
          )}

          {features && features.length > 0 && (
            <div className="listing-features-list">
              <h4>Features:</h4>
              <ul>
                {features.map((feature, index) => (
                  <li key={index}>{feature}</li>
                ))}
              </ul>
            </div>
          )}

          {description && (
            <div className="listing-description">{description}</div>
          )}

          <div className="listing-buttons">
            <button
              className="view-details-button"
              onClick={() => setShowModal(true)}
            >
              View Details
            </button>
            <button
              className="contact-button"
              onClick={() => setShowContactForm(true)}
            >
              Contact Me
            </button>
          </div>
        </div>
      </div>

      {showModal && (
        <div className="modal-overlay" onClick={() => setShowModal(false)}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <button className="close-modal" onClick={() => setShowModal(false)}>
              ×
            </button>
            <div className="modal-image-container">
              <img
                src={images[currentImageIndex].src}
                alt={images[currentImageIndex].alt}
                className="modal-image"
              />
              <button className="modal-nav prev" onClick={handlePrevImage}>
                ‹
              </button>
              <button className="modal-nav next" onClick={handleNextImage}>
                ›
              </button>
            </div>
            <div className="image-counter">
              {currentImageIndex + 1} / {images.length}
            </div>
          </div>
        </div>
      )}

      {showContactForm && (
        <div
          className="modal-overlay"
          onClick={() => setShowContactForm(false)}
        >
          <div
            className="modal-content contact-form"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              className="close-modal"
              onClick={() => setShowContactForm(false)}
            >
              ×
            </button>
            <h3>Contact About {title}</h3>
            <form onSubmit={handleContactSubmit}>
              <div className="form-group">
                <label htmlFor="name">Name</label>
                <input type="text" id="name" name="name" required />
              </div>
              <div className="form-group">
                <label htmlFor="email">Email</label>
                <input type="email" id="email" name="email" required />
              </div>
              <div className="form-group">
                <label htmlFor="phone">Phone</label>
                <input type="tel" id="phone" name="phone" required />
              </div>
              <div className="form-group">
                <label htmlFor="message">Message</label>
                <textarea
                  id="message"
                  name="message"
                  rows="4"
                  required
                ></textarea>
              </div>
              <button type="submit" className="submit-button">
                Send Message
              </button>
            </form>
          </div>
        </div>
      )}
    </>
  );
};

ListingCard.propTypes = {
  listing: PropTypes.shape({
    images: PropTypes.arrayOf(
      PropTypes.shape({
        id: PropTypes.number,
        src: PropTypes.string,
        alt: PropTypes.string,
      })
    ),
    title: PropTypes.string,
    status: PropTypes.string,
    price: PropTypes.number,
    address: PropTypes.string,
    squareFootage: PropTypes.number,
    propertyType: PropTypes.string,
    description: PropTypes.string,
    features: PropTypes.arrayOf(PropTypes.string),
    zoning: PropTypes.string,
    parking: PropTypes.number,
    yearBuilt: PropTypes.string,
    additionalFees: PropTypes.shape({
      cam: PropTypes.number,
      propertyTaxes: PropTypes.number,
      fireSuspension: PropTypes.number,
    }),
  }).isRequired,
};

export default ListingCard;
