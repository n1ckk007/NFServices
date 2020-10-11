import React from "react";
import { Card } from "react-bootstrap";
import { Spring } from "react-spring/renderprops";

import { Link } from "react-router-dom";
import "./OurServices.scss";
import services from "./servicesData";

const OurServices = () => (
  <Spring from={{ opacity: 0 }} to={{ opacity: 1 }} config={{ duration: 1300 }}>
    {(props) => (
      <div style={props}>
        <div className="container mt-4">
          <div className="card-deck row">
            {services.map((service, i) => (
              <div key={i} className="col-lg-4 mb-4 ">
                <Link
                  to={`/our_services/${service.route}`}
                  className="card-title"
                >
                  <Card>
                    <Card.Img variant="top" src={service.imgUrl} />
                    <div className="img-tint"></div>
                    <Card.Body>
                      <Card.Title>{service.title}</Card.Title>
                    </Card.Body>
                  </Card>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </div>
    )}
  </Spring>
);

export default OurServices;
