const bigProjects = {
  title: "Projects",
  subtitle:
    "A selection of projects that reflect my interest in real-world products, clean interfaces, and practical problem-solving.",
  projects: [
    {
      image: require("../assets/images/RealTime Tracker.png"),
      projectName: "Real-Time Tracker",
      projectDesc:
        "A real-time location tracking app built with Node.js, Express, Socket.IO, and Mapbox GL JS. It shows moving assets live on an interactive map with smooth updates and a clean monitoring experience.",
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
        "An evolving e-learning platform designed for students across different levels, with a focus on simple navigation, approachable design, and a clear learning journey.",
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
        "A weather forecasting app that delivers real-time conditions and useful predictions in a simple, easy-to-read interface.",
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
        "A library management system built with Node.js, Express, EJS, and MongoDB that makes it easy to manage books and authors through a clear CRUD workflow.",
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
        "An ongoing e-learning platform for students from high school to engineering, designed to make technical learning more interactive and accessible.",
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
        "A machine learning project that predicts heart disease risk using real-world data and presents the results in a more understandable, actionable way.",
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
