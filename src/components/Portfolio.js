import React from "react";
import SubHeading from "./UI/SubHeading";
import classes from "./Portfolio.module.css";
import Card from "./UI/Card";
// const projects = require('../utils/projects')
import projects from '../utils/projects'

// const projects = [
//   {
//     title: "iNoteBook",
//     desc: "A full stack note taking web app.",
//     img: inotebookImg,
//     github: "https://github.com/iHariKarmkar/inoteb",
//     liveLink: "",
//     type: "intermediate",
//   },
//   {
//     title: "Rock Paper Scissor",
//     desc: "Play Rock Paper Scissor with an interactive UI.",
//     img: inotebookImg,
//     github: "https://github.com/iHariKarmkar/rock-paper-scissor",
//     liveLink: "https://rockpaperscissorbyhk.vercel.app/",
//     type: "basic",
//   },
//   {
//     title: "Weather App",
//     desc: "Weather app with an amazing UI",
//     img: inotebookImg,
//     github: "https://github.com/iHariKarmkar/weather-app",
//     liveLink: "",
//     type: "intermediate",
//   },
//   {
//     title: "Expense Tracker App",
//     desc: "Web app to track your expense.",
//     img: inotebookImg,
//     github: "https://github.com/iHariKarmkar/expense-tracker-app",
//     liveLink: "https://expensetrackerbyhk.netlify.app/",
//     type: "intermediate",
//   },
//   {
//     title: "TextUtils",
//     desc: "A text utility web app to work on text.",
//     img: inotebookImg,
//     github: "https://github.com/iHariKarmkar/textutils",
//     liveLink: "https://textutilsbyhk.netlify.app/",
//     type: "basic",
//   },
//   {
//     title: "ToDo App",
//     desc: "Write your todos in an amazing UI.",
//     img: inotebookImg,
//     github: "https://github.com/iHariKarmkar/todo-app",
//     liveLink: "https://todobyhk.netlify.app/",
//     type: "basic",
//   },
//   {
//     title: "NeuzNook - News App",
//     desc: "Read trending news across the world.",
//     img: inotebookImg,
//     github: "https://github.com/iHariKarmkar/neuznook-trending-news-app",
//     liveLink: "",
//     type: "intermediate",
//   },
// ];

const Portfolio = () => {
  return (
    <div className={classes["portfolio-section"]} id="portfolio">
      <SubHeading heading="Portfolio" headingText="Projects I have done" />
      <div className="container">
        <div className={classes["portfolio-content"]}>
          {projects.map((project) => (
            <Card
              key={project.title}
              title={project.title}
              desc={project.desc}
              projectImg={project.img}
              github={project.github}
              liveLink={project.liveLink}
              type={project.type}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
