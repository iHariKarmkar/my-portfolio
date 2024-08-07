import React from 'react'
import classes from './Skills.module.css'
import SubHeading from './UI/SubHeading'
import skillImg from '../assets/skills.svg'
import SkillBar from './UI/SkillBar'
import SkillPercent from './UI/SkillPercent'
const Skills = () => {
  return (
    <>
    <div className={classes["skills-section"]} id='skills'>
      <SubHeading heading='skills' headingText='what i know'/>
      <div className="container">
        <div className={classes['skill-content']}>
        <div className={classes["skills-left"]}>
          <img src={skillImg} alt="skills-img" />
        </div>
        <div className={classes["skills-right"]}>
          <SkillBar/>
        </div>
        </div>
      </div>
    </div>
    </>
  )
}

export default Skills