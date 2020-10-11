import React from "react";
import { ContactForm } from "../../components/contact-form/ContactForm";
import GoogleMaps from "../../components/google-maps/GoogleMaps";
import "./Contact.scss";
import { Spring } from "react-spring/renderprops";

export const ContactPage = () => (
  <Spring from={{ opacity: 0 }} to={{ opacity: 1 }} config={{ duration: 1500 }}>
    {(props) => (
      <div style={props}>
        <div className="container ">
          <div className="row">
            <div className="col mt-4">
              <h2>Get in touch</h2>
            </div>
          </div>
          <div className="row">
            <div className="col-md mt-4">
              <h5>Fill out the contact form below:</h5>
              <ContactForm />
            </div>

            <GoogleMaps />
          </div>
          <div className="push"></div>
        </div>
      </div>
    )}
  </Spring>
);
