import React from "react";
import TopLogo from "../Icons/NewsLogo.svg";
import { Navbar, NavbarBrand } from "reactstrap";

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
          <img src={TopLogo} className = 'TopLogo' alt="Logo" ></img>
          Top-25 News
        </NavbarBrand>
      </Navbar>
    </div>
  );
}

export default TopNavBar;
