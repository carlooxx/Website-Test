import React from "react";
import GlobalStyle from "./GlobalStyle";
import Nav from "./components/Nav";
import Hero from "./components/Hero";
import Features from "./components/Features";

function App() {
  return (
    <div className="App">
      <GlobalStyle />
      <Nav />
      <Hero />
      <Features />
    </div>
  );
}

export default App;
