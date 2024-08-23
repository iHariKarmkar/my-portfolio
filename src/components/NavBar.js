import React, { Fragment, useState } from "react";
import logo from "../assets/logo.svg";
import classes from "./NavBar.module.css";
import {} from "react-icons/fa";
import Resume from "../assets/HariKumarKarmkar_shivalikCollege.pdf";
import { Link } from "react-scroll";

const NavBar = () => {
  const [navToggle, setNavToggle] = useState(false);
  const toggleMenu = () => {
    setNavToggle((prev) => !prev);
    console.log(navToggle);
  };
  return (
    <Fragment>
      <nav className={classes.navbar}>
        <div className={`${classes.container} ${classes.navContainer}`}>
          <Link to="home" className={classes.logo}>
            <img src={logo} alt="iHariKarmkar" />
          </Link>
          <div
            className={
              navToggle ? `${classes.menu} ${classes.show}` : `${classes.menu}`
            }
          >
            <ul className={`${classes["menu-items"]} menu`}>
              <li className={classes["menu-item"]}>
                <Link
                  activeClass="active"
                  to="home"
                  spy={true}
                  smooth={true}
                  duration={100}
                >
                  Home
                </Link>
              </li>
              <li className={classes["menu-item"]}>
                <Link
                activeClass="active" 
                to="skills" 
                spy={true} 
                smooth={true}  
                duration={100} 
                >
                  Skills
                </Link>
              </li>
              <li className={classes["menu-item"]}>
                <Link
                  activeClass="active" 
                  to="portfolio" 
                  spy={true} 
                  smooth={true}  
                  duration={100} 
                >
                  Portfolio
                </Link>
              </li>
              <li className={classes["menu-item"]}>
                <Link
                  activeClass="active" 
                  to="about" 
                  spy={true} 
                  smooth={true}  
                  duration={100} 
                  // offset={10}
                >
                  About
                </Link>
              </li>
              <li className={classes["menu-item"]}>
                <Link
                 activeClass="active" 
                 to="contact" 
                 spy={true} 
                 smooth={true}  
                 duration={100} 
                 offset={10}
                >
                  Contact
                </Link>
              </li>
            </ul>
            <a href="https://drive.google.com/file/d/1PDnHqZ3hYY2chtOnd0jjLZJ6TqBSdofz/view?usp=drive_link" className="btn">
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
