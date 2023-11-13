import React, { Fragment, useState } from "react";
import logo from "../assets/HariKarmkar.svg";
import classes from "./NavBar.module.css";
import {} from "react-icons/fa";

const NavBar = () => {
  const [navToggle, setNavToggle] = useState(false);
  const toggleMenu = () => {
    setNavToggle((prev) => !prev);
    console.log(navToggle);
  };

  return (
    <Fragment>
      <nav className={classes.navbar}>
        <a href="#" className={classes.logo}>
          <img src={logo} alt="iHariKarmkar" />
        </a>
        <div
          className={
            navToggle ? `${classes.menu} ${classes.show}` : `${classes.menu}`
          }
        >
      
          <ui className={classes["menu-items"]}>
            <li className={classes["menu-item"]}>
              <a className={classes.active} href="#">
                Home
              </a>
            </li>
            <li className={classes["menu-item"]}>
              <a href="#">About</a>
            </li>
            <li className={classes["menu-item"]}>
              <a href="#">Skills</a>
            </li>
            <li className={classes["menu-item"]}>
              <a href="#">Portfolio</a>
            </li>
            <li className={classes["menu-item"]}>
              <a href="#">Contact</a>
            </li>
          </ui>
          <button className="btn">Download CV</button>
        </div>
        
        <div
          className={
            navToggle
              ? `${classes.hamburger} ${classes.cross}`
              : `${classes.hamburger}`
          }
          onClick={toggleMenu}
        >
          <span></span>
        </div>
      </nav>
    </Fragment>
  );
};

export default NavBar;
