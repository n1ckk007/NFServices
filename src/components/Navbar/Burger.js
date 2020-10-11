import React, { useState } from "react";
import "./BurgerStyles";
import RightNav from "./RightNav";
import { StyledBurger } from "./BurgerStyles";

const Burger = () => {
  const [open, setOpen] = useState(false);
  const toggle = () => setOpen(!open);
  return (
    <>
      <StyledBurger open={open} onClick={toggle}>
        <div />
        <div />
        <div />
      </StyledBurger>
      <RightNav open={open} toggle={toggle} />
    </>
  );
};
export default Burger;
