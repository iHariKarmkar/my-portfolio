import React, { Fragment } from "react";
import classes from "./Hero.module.css";
import heroImage from "../assets/hero-image.svg";
import TypingAnimation from "./UI/TypingAnimation";
import { FaFacebook, FaGithub, FaInstagram, FaLinkedin } from "react-icons/fa6";
import ScrollArrow from "./UI/ScrollArrow";

const Hero = () => {
  return (
    <Fragment>
      <div className="container" id="home">
        <div className={classes.hero}>
          <div className={classes.leftSide}>
            <h1 className={classes.title}>
              I'm Hari Karmkar<span>.</span>
            </h1>
            <h2 className={classes.subtitle}>
              <TypingAnimation />
            </h2>
            <p className={classes["hero-text"]}>
              Crafting seamless digital experiences with a love for code and
              design. Let's build something beautiful!
            </p>
            <div className={classes.cta}>
              <a
                href="mailto:harikarmkar2014@gmail.com"
                className={`${classes.ctaButton} btn`}
              >
                Get In Touch
              </a>
              <a
                href="https://www.fiverr.com/s/1xo1Q0"
                target="_blank"
                rel="noreferrer"
                className={`${classes.ctaButton} ${classes.ctaAlt} btn`}
              >
                See Gigs
              </a>
            </div>
            <div className={classes.socials}>
              <a
                href="https://www.linkedin.com/in/iHariKarmkar"
                target="_blank"
                rel="noreferrer"
              >
                <FaLinkedin className={classes.icon} />
              </a>
              <a href="https://www.github.com/iHariKarmkar" target="_blank" rel="noreferrer">
                <FaGithub className={classes.icon} />
              </a>
              <a href="https://www.instagram.com/iHariKarmkar" target="_blank" rel="noreferrer">
                <FaInstagram className={classes.icon} />
              </a>
              <a href="https://www.facebook.com/iHariKarmkar" target="_blank" rel="noreferrer">
                <FaFacebook className={classes.icon} />
              </a>
            </div>
          </div>
          <div className={classes.rightSide}>
            <div className={classes["image-wrapper"]}>
              <img src={heroImage} alt="Hero" />
            </div>
          </div>
        </div>
      </div>

      <div className={classes.scroll}>
        <ScrollArrow />
      </div>
    </Fragment>
  );
};

export default Hero;
