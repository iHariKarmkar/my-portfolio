import React from 'react'
import classes from './ScrollArrow.module.css'
import { FaArrowDown } from 'react-icons/fa6'
const ScrollArrow = () => {
  return (
    <div className={classes.seeMoreText}>
        <h4>Scroll</h4>
        <FaArrowDown className={classes.arrow}/>
    </div>
  )
}

export default ScrollArrow