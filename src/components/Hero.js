import React from "react";
import styled from "styled-components";
import hero2 from "../img/hero1.jpg";
const Hero = () => {
  return (
    <StyledContainer>
      <img src={hero2} alt="hero" />
      <StyledWrap>
        <h1>SVI SMO MI MARKO</h1>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
        <button>OUR SERVICE</button>
        <button>GET STARTED</button>
      </StyledWrap>
    </StyledContainer>
  );
};

const StyledContainer = styled.div`
  display: flex;
  align-items: center;
  height: 70vh;
  width: 100%;
  background: lightblue;
  position: relative;
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    filter: brightness(70%);
  }
`;
const StyledWrap = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  text-align: center;
  h1 {
    font-weight: bold;
    font-size: 4rem;
    color: white;
    padding-bottom: 2rem;
  }
  p {
    color: white;
    font-size: 1.5rem;
    padding-bottom: 2rem;
  }
`;
export default Hero;
