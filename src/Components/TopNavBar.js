import React from "react";
import TopLogo from "../Icons/NewsLogo.svg";
import { Navbar, NavbarBrand, NavbarText } from "reactstrap";

function TopNavBar() {
  return (
    <div>
      <Navbar
        color="dark"
        dark
        expand="md"
        style={{ justifyContent: "flex-start" }}
      >
        <NavbarBrand>
          <img src={TopLogo} className = 'TopLogo'></img>
          Short News
        </NavbarBrand>
      </Navbar>
    </div>
  );
}

export default TopNavBar;
