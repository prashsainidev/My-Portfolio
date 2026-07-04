const greeting = {
  username: "Prashant Saini",
  title: "Hi, I'm Prashant",
  subTitle:
    "I'm a full-stack developer who enjoys building clean, practical web experiences with JavaScript, React.js, Node.js, and modern web tools.",
  resumeLink:
    "https://drive.google.com/file/d/13evi9mKUFX-Kew73ahhSEHth_jGa1uO_/view?usp=sharing", // Set to empty to hide the button
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
    "I build practical web products with a frontend-first mindset and a strong focus on clarity, usability, and steady improvement.",
  aboutParagraphs: [
    "I'm Prashant Saini, a full-stack developer from Aligarh, Uttar Pradesh. I completed my B.Tech in Information Technology in 2024 with a CGPA of 8.1, and building my first web page was what drew me into development.",
    "I enjoy working across both frontend and backend. I like building interfaces that feel simple and useful, and I also enjoy creating dependable backend systems with Node.js, Express, and MongoDB.",
    "My projects include educational platforms, real-time tracking apps, CRUD-based systems, and a machine-learning-based heart disease prediction project. I like building things that solve practical problems and help me keep learning.",
    "I care about clear code, thoughtful UI, and steady improvement. I learn fast, enjoy collaboration, and want to keep growing by building products that create real value."
  ],
  display: true
};

export {greeting, socialMediaLinks, aboutSection};
