import React from "react";
import "./ContactForm.scss";

export const ContactForm = () => (
  <div className="contact-container">
    <form>
      <div className="title-div">
        <h2 className="contact-title">Contact Us</h2>
      </div>
      <input type="text" id="fname" placeholder="Your full name..." />
      <input type="text" id="email" placeholder="Your email..." />
      <input type="text" id="phoneNo" placeholder="Your phone no..." />
      <input type="text" id="postcode" placeholder="Postcode..." />
      <textarea id="message" placeholder="Message..."></textarea>

      <input type="submit" value="Speak to us now!" />
    </form>
  </div>
);
