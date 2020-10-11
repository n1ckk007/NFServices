import { Link } from "react-router-dom";
import styled from "styled-components";

export const BottomBorder = styled.div`
  width: 100%;
  -webkit-box-shadow: 0 4px 6px -6px #222;
  -moz-box-shadow: 0 4px 6px -6px #222;
  box-shadow: 0 4px 9px -7px #222;
`;

export const Nav = styled.nav`
  margin: auto;
  margin-top: 5px;
  height: 65px;

  display: flex;
  justify-content: space-between;
  .navbar {
    margin-right: auto;
    overflow: hidden;
  }

  @media (max-width: 991px) {
    .phone-container {
      display: none;
    }
  }

  @media (max-width: 768px) {
    .navbar {
      display: none;
    }
    .phone-container {
      display: none;
    }
  }

  .logo {
    margin-top: 5px;  
 
    -webkit-transition: -webkit-transform 0.5s ease-in-out;
    transition: transform 0.5s ease-in-out;
  
  &:hover {
    -webkit-transform: rotate(180deg);
    transform: rotate(180deg);
  }
}

  .phone-container {
    font-weight: 700;
    height: 65px;
    color: var(--mainBlue);
    font-family: "Montserrat", sans-serif;
    letter-spacing: 0.03rem;
  }
`;

export const StyledLink = styled(Link)`
  font-weight: 700;
  height: 65px;
  color: var(--mainBlue);
  font-family: "Montserrat", sans-serif;
  letter-spacing: 0.03rem;
  display: inline-block;
  margin-top: 10px;
  margin-left: 3rem;
  position: relative;
  padding: 0;

  ::before {
    transition: 250ms;
    height: 3px;
    content: "";
    position: absolute;
    background-color: var(--mainBlue);
    margin-bottom: 25px;
    width: 0;
    bottom: 10px;
    display: block;
  }

  :hover::before {
    width: 100%;
  }
`;
