import React, { useState } from "react";
import classes from "./Contact.module.css";
import SubHeading from "./UI/SubHeading";
import contactImg from "../assets/contact.svg";
import axios from "axios";

const Contact = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const submitHandler = async (e) => {
    e.preventDefault();

    const data = {
      service_id: process.env.REACT_APP_serviceId,
      template_id: process.env.REACT_APP_templateId,
      user_id: process.env.REACT_APP_publicKey,
      template_params: {
        to_name: "Hari",
        from_name: name,
        from_email: email,
        message: message,
      },
    };
    try {
      const res = await axios.post(
        "https://api.emailjs.com/api/v1.0/email/send",
        data
      );
      alert("Your Messege Is Sent, Thanks!");
      setName("");
      setEmail("");
      setMessage("");
    } catch (error) {
      alert("Oops! Something is not right!!");
    }
  };



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
            <form onSubmit={submitHandler}>
              <div className={classes["form-input"]}>
                <label htmlFor="name">name</label>
                <input
                  type="text"
                  name="name"
                  id="name"
                  placeholder="Enter Your Name"
                  value={name}
                  required
                  onChange={(e) => setName(e.target.value)}
                />
              </div>
              <div className={classes["form-input"]}>
                <label htmlFor="email">email</label>
                <input
                  type="email"
                  name="email"
                  id="email"
                  placeholder="Enter Your Email"
                  value={email}
                  required
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
              <div className={classes["form-input"]}>
                <label htmlFor="message">Message</label>
                <textarea
                  name="message"
                  id="message"
                  placeholder="Write Your Message"
                  value={message}
                  required
                  onChange={(e) => setMessage(e.target.value)}
                ></textarea>
              </div>
              <button className={`${classes["contact-btn"]} btn`} type="submit">
                send message
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
