import React from 'react'
import classes from './SubHeading.module.css'
const SubHeading = (props) => {
  return (
    <div className="sub-heading">
        <h2 className={classes.heading}>{props.heading}<span>.</span></h2>
        <p className={classes['heading-text']}>{props.headingText}</p>
    </div>
  )
}

export default SubHeading