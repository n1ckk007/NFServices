import styled from "styled-components";

export const Wrapper = styled.div`
  position: relative;
`;

export const CarouselContainer = styled.div`
  height: 31rem;
  @media (max-width: 768px) {
    height: 25rem;
  }

  background-image: url(${(props) => props.url});

  filter: blur(1.5px);
  background-size: cover;
  background-position: center;

  .layer {
    background-color: rgba(83, 98, 160, 0.5);
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
  }
`;

export const CarouselText = styled.div`
  position: absolute;
  top: 20%;
  width: 95%;
  @media (max-width: 400px) {
    top: 10%;
  }
  z-index: 2;

  h1,
  p {
    color: whitesmoke;
  }
`;
