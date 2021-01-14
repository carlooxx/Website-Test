import React from "react";
import styled from "styled-components";

const Nav = () => {
  return (
    <StyledNav>
      <h1>
        <a href="#">Logo</a>
      </h1>
      <ul>
        <li>
          <StyledButton>
            <a href="#">FEATURES</a>
          </StyledButton>
        </li>
        <li>
          <StyledButton>
            <a href="#">ABOUT</a>
          </StyledButton>
        </li>
        <li>
          <StyledButton>
            <a href="#">SERVICES</a>
          </StyledButton>
        </li>
        <li>
          <StyledButton>
            <a href="#">GALLERY</a>
          </StyledButton>
        </li>
        <li>
          <StyledButton>
            <a href="#">CONTACT</a>
          </StyledButton>
        </li>
      </ul>
    </StyledNav>
  );
};

const StyledNav = styled.nav`
  min-height: 10vh;
  display: flex;
  margin: auto;
  background: white;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 10rem;
  position: sticky;
  top: 0;
  z-index: 3;
  a {
    color: black;
    text-decoration: none;
  }
  ul {
    display: flex;
    list-style: none;
    li {
      padding-left: 1rem;
      position: relative;
    }
  }
`;
const StyledButton = styled.button`
  font-weight: bold;
  outline: none;
  cursor: pointer;
  padding: 1rem 2rem;
  border: none;
  background: transparent;
  color: white;
  transition: all 0.5s ease;
  font-family: "Raleway", sans-serif;
  &:hover {
    background-color: #23d997;
    color: white;
  }
`;
export default Nav;
