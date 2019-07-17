import React from "react";
import "./App.scss";
import "./components/style/NavBar.scss";
import "./components/style/Footer.scss";
import { Container } from "reactstrap";
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";

function App() {
  return (
    <React.Fragment>
      <header>
        <NavBar />
      </header>
      <Container />
      <Footer />
    </React.Fragment>
  );
}

export default App;
