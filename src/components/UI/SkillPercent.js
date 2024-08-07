import React from "react";
import classes from "./SkillPercent.module.css";
const SkillPercent = (props) => {
  return (
    <div className={classes["skills-bar"]}>
      <div className={classes.bar}>
        <div className={classes.info}><span>{props.title}</span></div>
        <div className={classes["progress-line"]}> <span data-percent={props.dataPercent} style={{width: `${props.percent}%`}}></span> </div>
      </div>
    </div>
  );
};

export default SkillPercent;
