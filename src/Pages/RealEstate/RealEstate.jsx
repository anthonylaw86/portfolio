import React from "react";
import ForSale from "../../Components/ForSale/ForSale";
import ForLease from "../../Components/ForLease/ForLease";
import "./RealEstate.css";
import MortgageCalculator from "../../Components/MortgageCalculator/MortgageCalculator";
import MarketAnalysis from "../../Components/MarketAnalysis/MarketAnalysis";

const RealEstate = () => {
  return (
    <div className="real-estate-page">
      <div className="real-estate-container">
        <div className="real-estate-header">
          <h1>Real Estate Services</h1>
          <p>Expert guidance for all your real estate needs</p>
        </div>

        <div className="listings-section">
          <ForSale />
          <ForLease />
        </div>

        <div className="tools-section">
          <section className="tool-card">
            <h2>Market Analysis Report</h2>
            <p>
              Get a comprehensive analysis of current market conditions in your
              area.
            </p>
            <MarketAnalysis />
          </section>

          <section className="tool-card">
            <h2>Mortgage Calculator</h2>
            <p>
              Estimate your monthly payments and explore different financing
              options.
            </p>
            <MortgageCalculator />
          </section>
        </div>
      </div>
    </div>
  );
};

export default RealEstate;
