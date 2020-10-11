import React from "react";
import "./NavbarStyles";
import Burger from "./Burger";
import { BottomBorder, Nav, StyledLink } from "./NavbarStyles";
import  { ReactComponent as Smiley} from "../../assets/smiley.svg";
import { ReactComponent as Phone } from "../../assets/phone.svg";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <BottomBorder>
      <Nav className="container">
        <Link to="/">
          <Smiley className='logo' />
        </Link>
        <div className="navbar">
          <StyledLink to="/our_services" className="nav-link ">
            Our Services
          </StyledLink>
          <StyledLink to="/about" className="nav-link ">
            About Us
          </StyledLink>
          <StyledLink to="/calculators/loan-repayment" className="nav-link ">
            Calculators
          </StyledLink>
          <StyledLink to="/contact" className="nav-link ">
            Contact
          </StyledLink>
        </div>

        <Burger />

        <div className="mt-1 phone-container nav-link">
          <Phone />
          <span className="phoneNo"> 03 9999 9999</span>
        </div>
      </Nav>
    </BottomBorder>
  );
};

export default Navbar;
