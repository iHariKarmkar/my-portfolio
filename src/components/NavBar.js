import React, { Fragment, useState } from "react";
import logo from "../assets/logo.svg";
import logoIcon from '../assets/logoIcon.png'
import classes from "./NavBar.module.css";
import {} from "react-icons/fa";
import Resume from "../assets/HariKumarKarmkar_shivalikCollege.pdf";

const NavBar = () => {
  const [navToggle, setNavToggle] = useState(false);
  const toggleMenu = () => {
    setNavToggle((prev) => !prev);
    console.log(navToggle);
  };
  const [menu, setMenu] = useState("home");
  return (
    <Fragment>
      <nav className={classes.navbar}>
        <div className={`${classes.container} ${classes.navContainer}`}>
          <a href="#" className={classes.logo}>
            <img src={logo} alt="iHariKarmkar" />
          </a>
          <div
            className={
              navToggle ? `${classes.menu} ${classes.show}` : `${classes.menu}`
            }
          >
            <ul className={classes["menu-items"]}>
              <li className={classes["menu-item"]}>
                <a
                  onClick={()=>{setMenu("home"); toggleMenu()}}
                  className={menu === "home" ? classes.active : ""}
                  href="#"
                >
                  Home
                </a>
              </li>
              <li className={classes["menu-item"]}>
                <a
                  onClick={()=>{setMenu("skills"); toggleMenu()}}
                  className={menu === "skills" ? classes.active : ""}
                  href="#skills"
                >
                  Skills
                </a>
              </li>
              <li className={classes["menu-item"]}>
                <a
                  onClick={()=>{setMenu("portfolio"); toggleMenu()}}
                  className={menu === "portfolio" ? classes.active : ""}
                  href="#portfolio"
                >
                  Portfolio
                </a>
              </li>
              <li className={classes["menu-item"]}>
                <a
                  onClick={()=>{setMenu("about"); toggleMenu()}}
                  className={menu === "about" ? classes.active : ""}
                  href="#about"
                >
                  About
                </a>
              </li>
              <li className={classes["menu-item"]}>
                <a
                  onClick={()=>{setMenu("contact"); toggleMenu()}}
                  className={menu === "contact" ? classes.active : ""}
                  href="#"
                >
                  Contact
                </a>
              </li>
            </ul>
            <a href={Resume} download="HariKumarKarmkar_Resume" className="btn">
              Download CV
            </a>
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
        </div>
      </nav>
    </Fragment>
  );
};

export default NavBar;
