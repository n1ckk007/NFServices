import React from "react";
import { Link } from "react-router-dom";
import "./CustomButton.scss";

export const CustomButton = (props) => (
  <Link to={props.route}>
    <div className="custom-button">{props.text}</div>
  </Link>
);
