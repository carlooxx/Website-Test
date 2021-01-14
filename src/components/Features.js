import React from "react";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faLaptop,
  faImage,
  faShoppingCart,
  faBars,
} from "@fortawesome/free-solid-svg-icons";

const Features = () => {
  return (
    <StyledFeatures>
      <Container1>
        <Heading>
          <h4>WHY CHOOSE US</h4>
          <h1>FEATURES</h1>
        </Heading>
      </Container1>
      <Container2>
        <StyledIconCon>
          <Circle>
            <Icon>
              <FontAwesomeIcon icon={faLaptop} size="3x" />
            </Icon>
          </Circle>

          <h3>Responsive Design</h3>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus
            possimus laudantium consequuntur aut excepturi?
          </p>
        </StyledIconCon>
        <StyledIconCon>
          <Circle>
            <Icon>
              <FontAwesomeIcon icon={faImage} size="3x" />
            </Icon>
          </Circle>
          <h3>Parallax Effect</h3>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil
            voluptatem similique accusantium tempora perferendis quasi.
          </p>
        </StyledIconCon>
        <StyledIconCon>
          <Circle>
            <Icon>
              <FontAwesomeIcon icon={faShoppingCart} size="3x" />
            </Icon>
          </Circle>
          <h3>WooCommerce</h3>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quia optio
            non quos consectetur iure cumque!
          </p>
        </StyledIconCon>
        <StyledIconCon>
          <Circle>
            <Icon>
              <FontAwesomeIcon icon={faBars} size="3x" />
            </Icon>
          </Circle>
          <h3>Content Block</h3>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo quia
            laborum, repellat numquam inventore voluptas.
          </p>
        </StyledIconCon>
      </Container2>
    </StyledFeatures>
  );
};

const StyledFeatures = styled.div`
  min-height: 50vh;
  background: #f8f9f9;
`;
const StyledIconCon = styled.div`
  flex-basis: 30rem;
  display: flex;
  align-items: center;
  flex-direction: column;
`;
const Circle = styled.div`
  border-radius: 50%;
  width: 6rem;
  height: 6rem;
  background: #23d997;
  position: relative;
  transition: all 0.5s ease;

  &:hover {
    transform: scale(1.2);
    background: #b8b8b8;
  }
`;
const Heading = styled.div`
  text-align: center;
  h1 {
    font-size: 3rem;
  }
  h4 {
    color: grey;
  }
`;
const Icon = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;
const Container1 = styled.div`
  padding: 4rem 0rem 4rem 0rem;
`;
const Container2 = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-evenly;
  align-items: center;
  text-align: center;
`;
export default Features;
