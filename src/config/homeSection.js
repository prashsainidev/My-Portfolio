const greeting = {
  username: "Prashant Saini",
  title: "Hi, I'm Prashant",
  subTitle:
    "I'm a full-stack developer who enjoys building clean, practical web experiences with JavaScript, React.js, Node.js, and modern web tools.",
  resumeLink:
    "https://drive.google.com/drive/folders/1pNEG5U8ipkXiXczyFJw1nK-1H0mC90fo?usp=sharing", // Set to empty to hide the button
  displayGreeting: true // Set false to hide this section, defaults to true
};

const socialMediaLinks = {
  github: "https://github.com/prashsainidev/",
  linkedin: "https://www.linkedin.com/in/prashsainidev/",
  gmail: "Prashant.saini.3150@gmail.com",
  twitter: "https://x.com/prashsainidev/",
  facebook: "https://www.facebook.com/prashsainidev/",
  leetcode: "https://leetcode.com/u/prashsainidev/",
  hashnode: "https://prashsainidev.hashnode.dev/",
  // Instagram, Twitter and Kaggle are also supported in the links!
  // To customize icons and social links, tweak src/components/SocialMedia
  display: true // Set true to display this section, defaults to false
};

const aboutSection = {
  title: "About Me",
  subTitle:
    "Hi, I'm Prashant Saini - a curious, driven full-stack developer from Aligarh, Uttar Pradesh.",
  aboutParagraphs: [
    "I completed my B.Tech in Information Technology from Dr. A.P.J. Abdul Kalam Technical University in July 2024 with a CGPA of 8.1. Building my first web page was the moment I knew I wanted to create products for the web.",
    "I work across both front-end and back-end development. I enjoy shaping user-friendly interfaces with JavaScript, HTML, and CSS, and building dependable back-end systems with Node.js and MongoDB.",
    "My projects range from educational platforms and real-time tracking apps to a library management system and a machine-learning-based heart disease prediction project.",
    "I care about clear code, thoughtful problem-solving, and steady improvement. I learn fast, enjoy collaboration, and like turning ideas into useful products.",
    "I'm always open to learning, connecting, and working on projects that create real value."
  ],
  display: true
};

export {greeting, socialMediaLinks, aboutSection};
