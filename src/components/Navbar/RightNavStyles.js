import styled from "styled-components";
import { Link } from "react-router-dom";

export const Ul = styled.ul`
  display: flex;

  margin-right: auto;
  position: relative;
  z-index: 10;
  display: none;

  @media (max-width: 768px) {
    display: block;
    flex-flow: column nowrap;
    background-color: var(--mainBlue);
    position: fixed;
    transform: ${({ open }) => (open ? "translateX(0)" : "translateX(100%)")};
    top: 0;
    right: 0;
    height: 100vh;
    width: 300px;
    padding-top: 3.5rem;
    transition: transform 0.3s ease-in-out;
  }
`;

export const StyledLink = styled(Link)`
  font-weight: 700;
  height: 65px;

  font-family: "Montserrat", sans-serif;
  letter-spacing: 0.03rem;
  display: inline-block;
  position: relative;

  &:hover {
    color: white;
  }

  @media (max-width: 768px) {
    margin-left: 0 !important;
    width: 100%;
    color: white;
  }
`;
