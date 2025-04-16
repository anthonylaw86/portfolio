import React, { useState } from "react";
import "./MortgageCalculator.css";

const MortgageCalculator = () => {
  const [formData, setFormData] = useState({
    homePrice: "",
    downPayment: "",
    interestRate: "",
    loanTerm: 30,
  });

  const [monthlyPayment, setMonthlyPayment] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const calculatePayment = (e) => {
    e.preventDefault();
    const { homePrice, downPayment, interestRate, loanTerm } = formData;

    const loanAmount = homePrice - downPayment;
    const monthlyRate = interestRate / 100 / 12;
    const numberOfPayments = loanTerm * 12;

    const payment =
      (loanAmount *
        (monthlyRate * Math.pow(1 + monthlyRate, numberOfPayments))) /
      (Math.pow(1 + monthlyRate, numberOfPayments) - 1);

    setMonthlyPayment(payment.toFixed(2));
  };

  return (
    <div className="calculator-container">
      <form onSubmit={calculatePayment} className="calculator-form">
        <div className="form-group">
          <label htmlFor="homePrice">Home Price ($)</label>
          <input
            type="number"
            id="homePrice"
            name="homePrice"
            value={formData.homePrice}
            onChange={handleChange}
            required
            min="0"
          />
        </div>

        <div className="form-group">
          <label htmlFor="downPayment">Down Payment ($)</label>
          <input
            type="number"
            id="downPayment"
            name="downPayment"
            value={formData.downPayment}
            onChange={handleChange}
            required
            min="0"
          />
        </div>

        <div className="form-group">
          <label htmlFor="interestRate">Interest Rate (%)</label>
          <input
            type="number"
            id="interestRate"
            name="interestRate"
            value={formData.interestRate}
            onChange={handleChange}
            required
            min="0"
            step="0.01"
          />
        </div>

        <div className="form-group">
          <label htmlFor="loanTerm">Loan Term (years)</label>
          <select
            id="loanTerm"
            name="loanTerm"
            value={formData.loanTerm}
            onChange={handleChange}
          >
            <option value="15">15 years</option>
            <option value="30">30 years</option>
          </select>
        </div>

        <button type="submit" className="calculate-button">
          Calculate Payment
        </button>
      </form>

      {monthlyPayment && (
        <div className="result-container">
          <h3>Monthly Payment</h3>
          <p className="payment-amount">${monthlyPayment}</p>
          <div className="payment-details">
            <p>Principal & Interest: ${monthlyPayment}</p>
            <p>Property taxes and insurance not included</p>
          </div>
        </div>
      )}
    </div>
  );
};

export default MortgageCalculator;
