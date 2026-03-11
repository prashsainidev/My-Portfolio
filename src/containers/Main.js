import React, {useEffect, useState} from "react";
import Header from "../components/header/Header";
import Greeting from "./greeting/Greeting";
import About from "./about/About";
import Skills from "./skills/Skills";
import StackProgress from "./skillProgress/skillProgress";
import OpenSourceSection from "./projects/Projects";
import FeaturedProjectsSection from "./StartupProjects/StartupProject";
import Achievement from "./achievement/Achievement";
import Blogs from "./blogs/Blogs";
import Education from "./education/Education";
import ScrollToTopButton from "./topbutton/Top";
import Profile from "./profile/Profile";
import SplashScreen from "./splashScreen/SplashScreen";
import {splashScreen} from "../portfolio";
import {StyleProvider} from "../contexts/StyleContext";
import {useLocalStorage} from "../hooks/useLocalStorage";
import "./Main.scss";

const Main = () => {
  const prefersDarkMode = window.matchMedia("(prefers-color-scheme: dark)");
  const [isDark, setIsDark] = useLocalStorage(
    "isDark",
    prefersDarkMode.matches
  );
  const [isShowingSplashAnimation, setIsShowingSplashAnimation] =
    useState(true);

  useEffect(() => {
    if (!splashScreen.enabled) {
      return undefined;
    }

    const splashTimer = setTimeout(
      () => setIsShowingSplashAnimation(false),
      splashScreen.duration
    );

    return () => {
      clearTimeout(splashTimer);
    };
  }, []);

  const shouldShowSplashScreen =
    splashScreen.enabled && isShowingSplashAnimation;

  const portfolioSections = (
    <>
      <Header />
      <Greeting />
      <About />
      <Skills />
      <StackProgress />
      <Education />
      <OpenSourceSection />
      <FeaturedProjectsSection />
      <Achievement />
      <Blogs />
      <Profile />
      <ScrollToTopButton />
    </>
  );

  const toggleTheme = () => {
    setIsDark(!isDark);
  };

  return (
    <div className={isDark ? "dark-mode" : null}>
      <StyleProvider value={{isDark, changeTheme: toggleTheme}}>
        {shouldShowSplashScreen ? <SplashScreen /> : portfolioSections}
      </StyleProvider>
    </div>
  );
};

export default Main;
