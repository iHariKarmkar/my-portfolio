import React from "react";
import classes from "./Skills.module.css";
import SubHeading from "./UI/SubHeading";
import skillImg from "../assets/skills.svg";
import SkillBar from "./UI/SkillBar";
import SkillTag from "./UI/SkillTag";
const Skills = () => {
  return (
    <>
      <div className={classes["skills-section"]} id="skills">
        <SubHeading heading="skills" headingText="what i know" />
        <div className="container">
          <div className={classes["skill-content"]}>
            <div className={classes["skills-left"]}>
              <img src={skillImg} alt="skills-img" />
            </div>
            <div className={classes["skills-right"]}>
              <SkillBar />
            </div>
          </div>
        </div>
        <div className={classes['tag-list']}>
          <SkillTag tagTitle="HTML"/>
          <SkillTag tagTitle="CSS"/>
          <SkillTag tagTitle="JS"/>
          <SkillTag tagTitle="ReactJS"/>
          <SkillTag tagTitle="MongoDB"/>
          <SkillTag tagTitle="GitHub"/>
          <SkillTag tagTitle="SQL"/>
          <SkillTag tagTitle="Tailwind"/>
        </div>
      </div>
    </>
  );
};

export default Skills;
