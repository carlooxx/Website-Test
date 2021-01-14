import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`

*{
    margin: 0;
    padding: 0;
    box-sizing: border-box
}
body{
    font-family: 'Raleway', sans-serif;
}
button{
    margin-left: 2rem;
    outline: none;
    font-weight: bold;
    font-size: 1.1.rem;
    cursor: pointer;
    padding: 1rem 2rem;
    border: 3px solid white;
    background: transparent;
    color: white;
    transition: all 0.5s ease;
    font-family: 'Raleway', sans-serif;

    &:hover{
        background-color: white;
        color: black;
    }
}
`;
export default GlobalStyle;
