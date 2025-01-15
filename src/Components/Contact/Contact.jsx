import React from "react";
import "./Contact.css";
import phone from "../../../assets/phone1.svg";
import letter from "../../../assets/letter1.svg";
import location from "../../../assets/location1.svg";
import icon from "../../../assets/pikaso.png";

const Contact = () => {
  const [result, setResult] = React.useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target);

    formData.append("access_key", "8da0e542-818e-46cd-9669-e8a476d06111");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData,
    });

    const data = await response.json();

    if (data.success) {
      setResult("Form Submitted Successfully");
      event.target.reset();
      alert(data.message);
    } else {
      console.log("Error", data);
      setResult(data.message);
    }
  };

  return (
    <div id="contact" className="contact">
      <div className="contact-title">
        <h1 className="contact-title_h1">Get in touch</h1>
        <img src={icon} alt="contact title img" className="contact-title_img" />
      </div>
      <div className="contact-section">
        <div className="contact-left">
          <h1 className="contact-left_h1">Let's Talk</h1>
          <p className="contact-left_p">
            I'm open to new projects at the moment, so don't hesitate to reach
            out if you have something in mind you'd like to work on. Feel free
            to contact me anytime.
          </p>
          <div className="contact-details">
            <div className="contact-detail">
              <img className="contact-detail_img" src={letter} alt="email" />
              <p>alawcodes@gmail.com</p>
            </div>
            <div className="contact-detail">
              <img className="contact-detail_img" src={phone} alt="phone" />
              <p>801-440-1016</p>
            </div>
            <div className="contact-detail">
              <img
                className="contact-detail_img"
                src={location}
                alt="location"
              />
              <p>Salt Lake City, UT.</p>
            </div>
          </div>
        </div>
        <form onSubmit={onSubmit} className="contact-right">
          <label className="contact-right_label" htmlFor="">
            Your Name
          </label>
          <input
            className="contact-right_input"
            type="text"
            placeholder="Enter your name"
            name="name"
          />
          <label className="contact-right_label" htmlFor="">
            Your Email
          </label>
          <input
            className="contact-right_input"
            type="email"
            placeholder="Enter your email"
            name="email"
          />
          <label className="contact-right_label" htmlFor="">
            Write your message here
          </label>
          <textarea
            className="contact-right_textarea"
            name="message"
            rows="8"
            placeholder="Enter your message"
          ></textarea>
          <button className="contact-submit" type="submit">
            Submit now
          </button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
