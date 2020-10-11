import React from "react";
import { ShapeDivider } from "../shape-divider/ShapeDivider";
import { CarouselContainer, CarouselText, Wrapper } from "./CarouselStyles";

export const Carousel = (props) => (
  <Wrapper>
    <CarouselContainer url={props.url}>
      <div className="layer"></div>
      <ShapeDivider />
    </CarouselContainer>
    <div className="container">
      <CarouselText className="container">
        <h1>{props.title}</h1>
        <p>{props.text}</p>
      </CarouselText>
    </div>
  </Wrapper>
);

// export const Carousel = (props) => (
//   <CarouselContainer url={props.url}>
//     <div className="container-fluid carousel-text">
//       <div className="container  ">
//         <h1>{props.title}</h1>
//         <p>{props.text}</p>
//       </div>
//     </div>
//     <ShapeDivider />
//   </CarouselContainer>
// );
