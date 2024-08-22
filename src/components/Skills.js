import React from "react";
import classes from "./Skills.module.css";
import SubHeading from "./UI/SubHeading";
import skillImg from "../assets/skills.svg";
import SkillBar from "./UI/SkillBar";
import SkillTag from "./UI/SkillTag";
import skillTags from "../utils/skillTag";

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
        <div className={classes.tags}>
          <h4>Frameworks/Technologies</h4>
          <div className={classes["tag-list"]}>
            {skillTags.map((tag) => (
              <SkillTag key={tag.name} tagTitle={tag.name} />
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Skills;
