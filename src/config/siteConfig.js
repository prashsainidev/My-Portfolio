import splashAnimation from "../assets/lottie/splashAnimation";

const splashScreen = {
  enabled: true, // set false to disable splash screen
  animation: splashAnimation,
  duration: 2000 // Set animation duration as per your animation
};

const illustration = {
  animated: true // Set to false to use static SVG
};

const isHireable = true; // Set false if you are not looking for a job. Also isHireable will be display as Open for opportunities: Yes/No in the GitHub footer

export {splashScreen, illustration, isHireable};
