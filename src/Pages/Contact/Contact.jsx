import React, { useState } from "react";
import "./Contact.css";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formDataObj = new FormData();
    formDataObj.append("access_key", "8da0e542-818e-46cd-9669-e8a476d06111");
    formDataObj.append("subject", "New Contact Form Submission");
    formDataObj.append("from_name", formData.name);
    formDataObj.append("reply_to", formData.email);
    formDataObj.append("message", formData.message);

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formDataObj,
    });

    const data = await response.json();

    if (data.success) {
      setFormData({
        name: "",
        email: "",
        message: "",
      });
      alert("Thank you for your message! I'll get back to you soon.");
    } else {
      console.log("Error", data);
      alert("There was an error submitting the form. Please try again.");
    }
  };

  return (
    <div className="contact-page">
      <div className="contact-container">
        <div className="contact-header">
          <h1>Let&apos;s Connect</h1>
          <p>I&apos;m always open to new opportunities and collaborations</p>
        </div>

        <div className="contact-sections">
          <section className="contact-section get-in-touch">
            <h2>Get In Touch</h2>
            <div className="info-item">
              <h3>Email</h3>
              <a href="mailto:alawcodes@gmail.com">alawcodes@gmail.com</a>
            </div>
            <div className="info-item">
              <h3>Phone</h3>
              <a href="tel:8014401016">(801) 440-1016</a>
            </div>
            <div className="info-item">
              <h3>Location</h3>
              <p>Salt Lake City, UT</p>
            </div>
          </section>

          <section className="contact-section send-message">
            <h2>Send a Message</h2>
            <form className="contact-form" onSubmit={handleSubmit}>
              <div className="form-group">
                <input
                  type="text"
                  name="name"
                  placeholder="Your Name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="form-group">
                <input
                  type="email"
                  name="email"
                  placeholder="Your Email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="form-group">
                <textarea
                  name="message"
                  placeholder="Your Message"
                  rows="6"
                  value={formData.message}
                  onChange={handleChange}
                  required
                ></textarea>
              </div>
              <button type="submit" className="submit-button">
                Send Message
              </button>
            </form>
          </section>

          <section className="contact-section follow-me">
            <h2>Follow Me</h2>
            <div className="social-links">
              <a
                href="https://github.com/anthonylaw86"
                target="_blank"
                rel="noopener noreferrer"
                className="social-link"
              >
                <span className="social-icon">GitHub</span>
              </a>
              <a
                href="https://www.linkedin.com/in/anthony--law"
                target="_blank"
                rel="noopener noreferrer"
                className="social-link"
              >
                <span className="social-icon">LinkedIn</span>
              </a>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};

export default Contact;
