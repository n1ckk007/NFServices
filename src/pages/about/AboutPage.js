import React from "react";
import { Carousel } from "../../components/carousel/Carousel";
import { ReactComponent as Lady1 } from "../../assets/bighead-l.svg";
import { ReactComponent as Lady2 } from "../../assets/bighead-l2.svg";
import { ReactComponent as Man1 } from "../../assets/bighead.svg";
import "./AboutPage.scss";
import { Spring } from "react-spring/renderprops";

export const AboutPage = () => (
  <div>
    <Carousel
      title="About Us"
      text="Get to know about Nicks Financial Services"
      url={`https://images.unsplash.com/photo-1450101499163-c8848c66ca85?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1950&q=80`}
    />
    <Spring
      from={{ opacity: 0 }}
      to={{ opacity: 1 }}
      config={{ duration: 1300 }}
    >
      {(props) => (
        <div style={props}>
          <div className="container mt-4">
            <div className="row mt-4">
              <div className="col-lg mb-3">
                <p>
                 
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio, ut necessitatibus repellendus facere asperiores deleniti voluptas quod doloribus accusantium maxime, illum officia, incidunt exercitationem id earum dignissimos nisi quibusdam natus molestias. Molestias, qui vero est modi fuga optio repellat officiis perferendis mollitia odit architecto nesciunt!
                  <br />
                  <br />
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio, ut necessitatibus repellendus facere asperiores deleniti voluptas quod doloribus accusantium maxime, illum officia, incidunt exercitationem id earum dignissimos nisi quibusdam natus molestias. Molestias, qui vero est modi fuga optio repellat officiis perferendis mollitia odit architecto nesciunt!
                </p>
              </div>
            </div>
            <div className="row mt-4">
              <div className="col people-container">
                <h2>Our Team:</h2>
                <div className="person ">
                  <div className="bh-container">
                    <Lady1 />
                  </div>
                  <div className="text">
                    <h2>Lady 1</h2>
                  </div>
                </div>
                <div className="person">
                  <div className="bh-container">
                    <Lady2 />
                  </div>
                  <div className="text">
                    <h2>Lady 2</h2>
                  </div>
                </div>
                <div className="person">
                  <div className="bh-container">
                    <Man1 />
                  </div>
                  <div className="text">
                    <h2>Nick</h2>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </Spring>
  </div>
);
