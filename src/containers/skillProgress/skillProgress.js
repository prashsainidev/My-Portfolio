import React, {useContext} from "react";
import "./Progress.scss";
import {techStack} from "../../portfolio";
import {Fade} from "react-reveal";
import StyleContext from "../../contexts/StyleContext";

export default function StackProgress() {
  const {isDark} = useContext(StyleContext);

  if (techStack.viewSkillBars) {
    return (
      <Fade bottom duration={1000} distance="20px">
        <div className="skills-container">
          <div className="skills-bar">
            <span
              className={
                isDark
                  ? "skills-bar-eyebrow skills-bar-eyebrow-dark"
                  : "skills-bar-eyebrow"
              }
            >
              Strengths
            </span>
            <h1 className={isDark ? "skills-heading skills-heading-dark" : "skills-heading"}>
              {techStack.title}
            </h1>
            <p
              className={
                isDark
                  ? "skills-bar-subtitle skills-bar-subtitle-dark"
                  : "skills-bar-subtitle"
              }
            >
              {techStack.subTitle}
            </p>
            {techStack.experience.map((exp, i) => {
              const progressStyle = {
                width: exp.progressPercentage
              };

              return (
                <div key={i} className="skill">
                  <div className="skill-copy">
                    <p className={isDark ? "skill-title skill-title-dark" : "skill-title"}>
                      {exp.Stack}
                    </p>
                    <span className="skill-value">{exp.progressPercentage}</span>
                  </div>
                  <div className="meter">
                    <span style={progressStyle}></span>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </Fade>
    );
  }

  return null;
}
