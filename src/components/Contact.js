import React from "react";
import classes from "./Contact.module.css";
import SubHeading from "./UI/SubHeading";
import contactImg from "../assets/contact.svg";
const Contact = () => {
  return (
    <div className={classes["contact-section"]} id="contact">
      <SubHeading
        heading="Get In touch"
        headingText="Want to connect"
        invert={true}
      />
      <div className="container">
        <div className={classes["contact-content"]}>
          <div className={classes.left}>
            <img src={contactImg} alt="contact" />
          </div>
          <div className={classes.right}>
            <h4>Let's connect</h4>
            <form>
              <div className={classes["form-input"]}>
                <label htmlFor="name">name</label>
                <input type="text" name="name" id="name" placeholder="Enter Your Name" />
              </div>
              <div className={classes["form-input"]}>
                <label htmlFor="email">email</label>
                <input type="email" name="email" id="email" placeholder="Enter Your Email" />
              </div>
              <div className={classes['form-input']}>
                <label htmlFor="message">Message</label>
                <textarea name="message" id="message" placeholder="Write Your Message"></textarea>
              </div>
              <button className={`${classes['contact-btn']} btn`} type="submit">send message</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
