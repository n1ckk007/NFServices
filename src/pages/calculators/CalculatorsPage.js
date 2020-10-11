import React from "react";
import { Link, Route } from "react-router-dom";
import "./Calculators.scss";
import calculators from "../../components/calculator/calculators";
import { Spring } from "react-spring/renderprops";

function Calculator({ match }) {
  const Calc = calculators.find(({ id }) => id === match.params.calcId);
  const scrollTo = (ref) => {
    if (ref /* + other conditions */) {
      ref.scrollIntoView({ behavior: "smooth", });
    }
  };
  return (
    <iframe
      title="calculator"
      frameBorder="0"
      scrolling="no"
      src={Calc.url}
      ref={scrollTo}
      
    ></iframe>
  );
}

export const CalculatorsPage = () => (
  <Spring from={{ opacity: 0 }} to={{ opacity: 1 }} config={{ duration: 1300 }}>
    {(props) => (
      <div style={props}>
        {" "}
        <div className="container mt-4">
          <div className="row">
            <div className="col">
              <h1>Calculators</h1>
            </div>
          </div>

          <div className="row mt-4">
            <div className="col-md-5">
              {calculators.map((calc, i) => (
                <div key={i}>
                  <ul>
                    <li>
                      <Link to={`/calculators/${calc.id}`}>{calc.name}</Link>
                    </li>
                  </ul>
                </div>
              ))}
            </div>
            <div className="col-md-7">
              <Route path={`/calculators/:calcId`} component={Calculator} />
            </div>
          </div>
        </div>
      </div>
    )}
  </Spring>
);
