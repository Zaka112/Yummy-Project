import React from "react";
import { Link } from "react-router-dom";

import Logo from "../assets/chef.png";
export default function NavBar() {
  return (
    <div className="navBar">
      <Link to="/">
        <img src={Logo} height={50} alt="ChefLogo" />
      </Link>

      <Link to="/">
        <div>Home</div>
      </Link>
      <Link to="/recipe">
        <div>Recipe</div>
      </Link>
      <Link to="/favorite">
        <div>Favorite</div>
      </Link>
      <Link to="/contact">
        <div>Contact</div>
      </Link>
    </div>
  );
}
