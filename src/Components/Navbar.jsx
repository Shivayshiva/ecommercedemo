import React from "react";
import Cart from "./Cart";
import LoginButton from "./LoginButton";
import "./Navbar.css";
import Signupbutton from "./Signupbutton";

export default function Navbar() {
  return (
      <div className="navbar">
        <h1 id="navbar-h">eCommerce Site</h1>
        <div className="sub_navbar">
          <LoginButton />
          <Signupbutton/>
          <Cart />
        </div>
      </div>
  );
}
