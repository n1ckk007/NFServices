import "./RightNavStyles";
import { Ul, StyledLink } from "./RightNavStyles";

import React from "react";

const RightNav = ({ open, toggle }) => {
  return (
    <Ul open={open} id="sidebar">
      <div className="">
        <StyledLink to="/our_services" className="nav-link" onClick={toggle}>
          Our Services
        </StyledLink>
        <StyledLink to="/about" className="nav-link" onClick={toggle}>
          About Us
        </StyledLink>
        <StyledLink to="/calculators" className="nav-link" onClick={toggle}>
          Calculators
        </StyledLink>
        <StyledLink to="/contact" className="nav-link" onClick={toggle}>
          Contact
        </StyledLink>
      </div>
    </Ul>
  );
};

export default RightNav;
