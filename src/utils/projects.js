import inotebookImg from "../assets/inotebook.jpg";
import expenseImg from '../assets/expenseTracker.png'
import neuznookImg from '../assets/neuznook.png'
import rockPaperImg from '../assets/rockpaperscissor.png'
import textUtilImg from '../assets/textUtils.png'
import todoImg from '../assets/todo.png'
import weatherImg from '../assets/weather.png'




const projects = [
    {
      title: "iNoteBook",
      desc: "A full stack note taking web app.",
      img: inotebookImg,
      github: "https://github.com/iHariKarmkar/inoteb",
      liveLink: "",
      type: "intermediate",
    },
    {
      title: "Rock Paper Scissor",
      desc: "Play Rock Paper Scissor with an interactive UI.",
      img: rockPaperImg,
      github: "https://github.com/iHariKarmkar/rock-paper-scissor",
      liveLink: "https://rockpaperscissorbyhk.vercel.app/",
      type: "basic",
    },
    {
      title: "Weather App",
      desc: "Weather app with an amazing UI",
      img: weatherImg,
      github: "https://github.com/iHariKarmkar/weather-app",
      liveLink: "",
      type: "intermediate",
    },
    {
      title: "Expense Tracker App",
      desc: "Web app to track your expense.",
      img: expenseImg,
      github: "https://github.com/iHariKarmkar/expense-tracker-app",
      liveLink: "https://expensetrackerbyhk.netlify.app/",
      type: "intermediate",
    },
    {
      title: "TextUtils",
      desc: "A text utility web app to work on text.",
      img: textUtilImg,
      github: "https://github.com/iHariKarmkar/textutils",
      liveLink: "https://textutilsbyhk.netlify.app/",
      type: "basic",
    },
    {
      title: "ToDo App",
      desc: "Write your todos in an amazing UI.",
      img: todoImg,
      github: "https://github.com/iHariKarmkar/todo-app",
      liveLink: "https://todobyhk.netlify.app/",
      type: "basic",
    },
    {
      title: "NeuzNook - News App",
      desc: "Read trending news across the world.",
      img: neuznookImg,
      github: "https://github.com/iHariKarmkar/neuznook-trending-news-app",
      liveLink: "",
      type: "intermediate",
    },
  ];

  export default projects;