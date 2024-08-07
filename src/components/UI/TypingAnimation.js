import React from "react";
import { TypeAnimation } from "react-type-animation";
import classes from '../Hero.module.css'

const TypingAnimation = () => {
  return (
    <TypeAnimation
      preRenderFirstString={true}
      sequence={[
        "Frontend Developer",
        2000,
        "UI/UX Designer",
        2000,
        "Programmer",
        2000,
      ]}
      wrapper="span"
      speed={50}
      style={{ fontSize: "2.5rem", color: "var(--primary100)", display: "inline-block" }}
      repeat={Infinity}
      className={classes.subtitle}
    />
  );
};

export default TypingAnimation;
