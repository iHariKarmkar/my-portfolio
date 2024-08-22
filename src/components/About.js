import React from "react";
import SubHeading from "./UI/SubHeading";
import classes from "./About.module.css";
import aboutImg from "../assets/about.svg";

const About = () => {
  return (
    <div className={classes["about-section"]} id="about">
      <SubHeading heading="About" headingText="want to know more" />
      <div className="container">
        <div className={classes["about-content"]}>
          <div className={classes.left}>
            <h4>
              Hello! I'm <span>Hari Kumar Karmkar</span>
            </h4>
            <p>
              A passionate and driven B.Tech student specializing in Computer
              Science and Engineering. With a strong foundation in web
              development, I have honed my skills in modern technologies like
              React.js, Node.js, Express.js, HTML, CSS, JavaScript, and Tailwind
              CSS.
            </p>

            <p>
              I love building dynamic, user-friendly web applications that solve
              real-world problems and enhance user experiences. My journey in
              tech has been fueled by a curiosity to learn and a dedication to
              mastering the tools and frameworks that bring ideas to life.
            </p>

            <p>
              Thank you for visiting my portfolio—feel free to explore my work
              and connect with me!
            </p>
          </div>
          <div className={classes.right}>
            <img src={aboutImg} alt="about" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
