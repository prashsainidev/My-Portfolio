import React, {useContext} from "react";
import "./Skills.scss";
import SoftwareSkill from "../../components/softwareSkills/SoftwareSkill";
import {skillsSection} from "../../portfolio";
import {Fade} from "react-reveal";
import StyleContext from "../../contexts/StyleContext";

export default function Skills() {
  const {isDark} = useContext(StyleContext);

  if (!skillsSection.display) {
    return null;
  }

  return (
    <div className={isDark ? "dark-mode main" : "main"} id="skills">
      <div className="skills-main-div">
        <Fade bottom duration={1000}>
          <div className="skills-shell">
            <div className="skills-text-div">
              <span
                className={
                  isDark ? "skills-eyebrow skills-eyebrow-dark" : "skills-eyebrow"
                }
              >
                Skills
              </span>
              <h1 className={isDark ? "skills-heading skills-heading-dark" : "skills-heading"}>
                {skillsSection.title}
              </h1>
              <p
                className={
                  isDark
                    ? "subTitle skills-text-subtitle skills-text-subtitle-dark"
                    : "subTitle skills-text-subtitle"
                }
              >
                {skillsSection.subTitle}
              </p>
            </div>
            <SoftwareSkill isDark={isDark} />
          </div>
        </Fade>
      </div>
    </div>
  );
}
