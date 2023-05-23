import React from "react";

import Badge from "@mui/material/Badge";
import { Link } from "react-router-dom";

import logo from "../assets/chef.png";

export default function NavBar({ favRecipes }) {
  let favCount;
  favCount = favRecipes.length;

  return (
    <div className="navBar">
      <Link to="/">
        <img src={logo} height={50} alt="ChefLogo" />{" "}
        <span className="logo">YUMMY</span>
      </Link>
      <Link to="/">
        <div>HOME</div>
      </Link>
      <Link to="/recipe">
        <div>RECIPE</div>
      </Link>
      <Link to="/favorite">
        <Badge badgeContent={favCount} color="primary">
          <div>FAVORITE</div>
        </Badge>
      </Link>
      <Link to="/contact">
        <div>CONTACT</div>
      </Link>
    </div>
  );
}
