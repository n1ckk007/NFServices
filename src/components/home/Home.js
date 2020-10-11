import React from "react";
import { CustomButton } from "../custom-button/CustomButton";
import banks from "../../assets/banks.png";
import "./Home.scss";

import { Spring } from "react-spring/renderprops";
import {ReactComponent as HomeSvg} from '../../assets/personal_finance.svg'

export const Home = () => (
  <Spring from={{ opacity: 0 }} to={{ opacity: 1 }} config={{ duration: 1300 }}>
    {(props) => (
      <div style={props}>
        <div className="container">
          <div className="row mt-4">
            <div className="col-md mb-4 ">
              <h1>Our Lenders</h1>

              <p>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Veniam eum exercitationem quas excepturi quisquam alias eos est accusantium laborum. Eos debitis quos, in unde at beatae dignissimos ipsum? Reprehenderit, fuga.
              </p>
              <CustomButton text="Find out more" route="our_services" />
            </div>
            <div className="col-md mb-4 ">
              <img src={banks} alt="Banks" className="banksImg" />
            </div>
          </div>
          <div className="row mt-4">
          <div className="col-md mb-4 order-2 order-md-1">
              <HomeSvg className='svg'/>
            </div>
            <div className="col-md mb-4 order-1 order-md-2">
              <h1>We are here to help</h1>

              <p className='mt-4'>
                Are you looking to refinance your home loan?
                <br />
                <br />
                Or maybe you're looking for a business loan?
                <br />
                <br />
                Speak to one of our specialists today! If you already know your
                question, please complete the form and one of our specialists
                will get back to you as soon as possible.
                <br />
                <br />
                Alternatively, call 03 9999 9999 during normal office hours.
              </p>
              <CustomButton text="Contact us" route="contact" />
            </div>
            
          </div>
        </div>
      </div>
    )}
  </Spring>
);
