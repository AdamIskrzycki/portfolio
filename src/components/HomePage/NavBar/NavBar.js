import React from "react";
import classes from "./NavBar.module.css";
import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <header className={classes.NavBar}>
      <Link to="/" style={{textDecoration:"none"}}>
        <div className={classes.NavItem}>HOME</div>
      </Link>
      <Link to="/projects" style={{textDecoration:"none"}}>
        <div className={classes.NavItem}>PROJECTS</div>
      </Link>
    </header>
  );
};

export default NavBar;
