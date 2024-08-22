import React from 'react'
import classes from './Card.module.css'
import { FaGithub, FaLink } from "react-icons/fa";
const Card = (props) => {
  return (
    <div className={classes['card-container']}>
      <span className={classes.badge}>{props.type}</span>
        <div className={classes['card-img']}>
            <img src={props.projectImg} alt={props.title} />
        </div>
        <div className={classes['card-content']}>
          <h3>{props.title}</h3>
          <p>{props.desc}</p>
          <div className={classes.links}>
            <a href={props.github} rel="noreferrer" target='_blank'><FaGithub/></a>
            {props.liveLink !== "" && <a href={props.liveLink} rel="noreferrer" target='_blank'><FaLink/></a>}
          </div>
        </div>
    </div>
  )
} 

export default Card