import React from 'react'
import { FaCheckCircle } from "react-icons/fa";
import classes from './SkillTag.module.css'

const SkillTag = (props) => {
  return (
    <span className={classes.tag}>
        <span>{props.tagTitle}</span>
        <FaCheckCircle className={classes.icon}/>
    </span>
  )
}

export default SkillTag