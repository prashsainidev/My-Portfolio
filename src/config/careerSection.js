const skillsSection = {
  title: "What I Work With",
  subTitle:
    "I work across the frontend and backend with tools I genuinely enjoy using to build clean, fast, and practical web products.",
  softwareSkills: [
    {
      skillName: "html-5",
      svgIconPath: "https://img.icons8.com/color/96/000000/html-5.png"
    },
    {
      skillName: "css3",
      svgIconPath: "https://img.icons8.com/color/96/000000/css3.png"
    },
    {
      skillName: "JavaScript",
      svgIconPath: "https://img.icons8.com/color/96/000000/javascript.png"
    },
    {
      skillName: "reactjs",
      svgIconPath: "https://img.icons8.com/color/96/000000/react-native.png"
    },
    {
      skillName: "nextjs",
      svgIconPath: "https://img.icons8.com/color/96/000000/nextjs.png"
    },
    {
      skillName: "tailwind",
      svgIconPath: "https://img.icons8.com/color/96/000000/tailwindcss.png"
    },
    {
      skillName: "nodejs",
      svgIconPath: "https://img.icons8.com/color/96/000000/nodejs.png"
    },
    {
      skillName: "Express.js",
      svgIconPath: "https://img.icons8.com/color/96/000000/express-js.png"
    },
    {
      skillName: "sql-database",
      svgIconPath: "https://img.icons8.com/color/96/000000/database.png"
    },
    {
      skillName: "Mongo DB",
      svgIconPath: "https://img.icons8.com/color/96/000000/mongodb.png"
    },
    {
      skillName: "Java",
      svgIconPath:
        "https://img.icons8.com/color/96/000000/java-coffee-cup-logo.png"
    },
    {
      skillName: "git",
      svgIconPath: "https://img.icons8.com/color/96/000000/git.png"
    },
    {
      skillName: "npm",
      svgIconPath: "https://img.icons8.com/color/96/000000/npm.png"
    },
    {
      skillName: "vscode",
      svgIconPath:
        "https://img.icons8.com/color/96/000000/visual-studio-code-2019.png"
    },
    {
      skillName: "figma",
      svgIconPath: "https://img.icons8.com/color/96/000000/figma.png"
    },
    {
      skillName: "notion",
      svgIconPath: "https://img.icons8.com/color/96/000000/notion.png"
    }
  ],
  display: true
};

const educationInfo = {
  title: "Education",
  subtitle:
    "The academic foundation that shaped how I learn, lead, and build as a developer.",
  schools: [
    {
      schoolName: "Aligarh College of Engineering and Technology (ACET)",
      logo: require("../assets/images/education/ACETLOGO.png"),
      subHeader: "Bachelor of Technology in Information Technology",
      duration: "Nov 2020 - July 2024",
      grade: "CGPA 8.1",
      desc: "Graduated with a CGPA of 8.1. ACET is affiliated with Dr. A.P.J. Abdul Kalam Technical University (AKTU).",
      descBullets: [
        "Led the coding club, organizing technical workshops and hackathons.",
        "Coordinated the university's annual tech fest, fostering innovation and collaboration."
      ]
    }
  ],
  display: true
};

const techStack = {
  viewSkillBars: true, //Set it to true to show Proficiency Section
  title: "How I Approach Building",
  subTitle:
    "A quick snapshot of the areas I feel most confident in and where I naturally spend the most time while building products.",
  experience: [
    {
      Stack: "Frontend and UI Thinking",
      progressPercentage: "55%"
    },
    {
      Stack: "Problem Solving and Logic",
      progressPercentage: "40%"
    },
    {
      Stack: "Version Control and Workflow",
      progressPercentage: "60%"
    }
  ],
  displayCodersrank: false // Set true to display codersrank badges section need to changes your username in src/containers/skillProgress/skillProgress.js:17:62, defaults to false
};

const workExperiences = {
  display: false, //Set it to true to show workExperiences Section
  experience: [
    {
      role: "",
      company: "",
      companylogo: require("../assets/images/projects/Library.png"),
      date: "Oct 2022 - Mar 2023",
      desc: "",
      descBullets: [""]
    }
  ]
};

export {
  skillsSection,
  educationInfo,
  techStack,
  workExperiences
};
