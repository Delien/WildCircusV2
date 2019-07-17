import React from "react";
import "./App.scss";
import "./components/style/NavBar.scss";
import { Container } from "reactstrap";
import NavBar from "./components/NavBar";

function App() {
  return (
    <React.Fragment>
      <header>
        <NavBar />
      </header>
      <Container />
    </React.Fragment>
  );
}

export default App;
