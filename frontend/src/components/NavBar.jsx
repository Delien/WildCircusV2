import React from "react";
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink
} from "reactstrap";
import logoplaceholder from "../pictures/logoplaceholder.png";
import numero from "../pictures/numero.png";

export default class NavBar extends React.Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      isOpen: false
    };
  }
  toggle() {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }
  render() {
    return (
      <div>
        <Navbar color="faded" light expand="md" sticky="top">
          <NavbarBrand href="/">
            <img className="logo" src={logoplaceholder} alt="" />
          </NavbarBrand>
          <NavbarToggler onClick={this.toggle} />
          <Collapse isOpen={this.state.isOpen} navbar>
            <Nav navbar>
              <NavItem>
                <NavLink href="/components/">NOS DATES</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="/components/">LE CIRQUE</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="/components/">TARIFS</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="/components/">CONTACT</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="/components/">ACTUALITÉS</NavLink>
              </NavItem>
            </Nav>
          </Collapse>
          <div className="blockResa">
            <img
              className="numero"
              src={numero}
              alt="Reservez au 0836656565 service 1€/min + prix d'appel"
            />
            <button className="reservez"> RÉSERVEZ VOS PLACES </button>
          </div>
        </Navbar>
      </div>
    );
  }
}
