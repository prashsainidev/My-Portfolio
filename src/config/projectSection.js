const bigProjects = {
  title: "Projects",
  subtitle:
    "A showcase of my personal and collaborative projects that blend creativity with technology.",
  projects: [
    {
      image: require("../assets/images/RealTime Tracker.png"),
      projectName: "Real-Time Tracker",
      projectDesc:
        "A live-location monitoring web app that lets users track moving assets on an interactive map in real time. Built with Node.js, Express and Socket.IO for bidirectional updates, and Mapbox GL JS for sleek, customizable map visualizations.",
      footerLink: [
        {
          name: "View Project",
          url: "https://github.com/prashsainidev/realtime-tracker"
        }
      ]
    },
    {
      image: require("../assets/images/Learniverse.png"),
      projectName: "Learniverse",
      projectDesc:
        "Learniverse is an evolving e-learning platform designed for students across different levels. Currently, it features a main page with Home, About, and Contact Us sections.",
      footerLink: [
        {
          name: "View Project",
          url: "https://learniverse-pied.vercel.app/"
        }
      ]
    },
    {
      image: require("../assets/images/weather.png"),
      projectName: "Weatherwise",
      projectDesc:
        "A dynamic weather forecasting app that provides real-time updates and accurate predictions, helping users plan their day with confidence.",
      footerLink: [
        {
          name: "View Project",
          url: "https://weather-wise-ai.vercel.app/"
        }
      ]
    },
    {
      image: require("../assets/images/Library.png"),
      projectName: "MyLibrary",
      projectDesc:
        "A dynamic library management system built using Node.js, Express, EJS, and MongoDB. It simplifies tracking books and authors with efficient CRUD operations and a user-friendly design.",
      footerLink: [
        {
          name: "View Project",
          url: "https://github.com/prashsainidev/MyLibrary"
        }
      ]
    },
    {
      image: require("../assets/images/ITech.png"),
      projectName: "I Tech World",
      projectDesc:
        "An ongoing e-learning platform designed for students from high school to engineering offering interactive courses and practical learning experiences.",
      footerLink: [
        {
          name: "View Project",
          url: "https://i-tech-gamma.vercel.app/"
        }
      ]
    },
    {
      image: require("../assets/images/Heart.png"),
      projectName: "Heart Disease Prediction",
      projectDesc:
        "A machine learning project that predicts heart disease risk using real-world data, turning complex insights into actionable information.",
      footerLink: [
        {
          name: "View Project",
          url: "https://github.com/prashsainidev/Heart-Disease-Predicition"
        }
      ]
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

export {bigProjects};
