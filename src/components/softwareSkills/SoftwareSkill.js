import React from "react";
import "./SoftwareSkill.scss";
import {skillsSection} from "../../portfolio";

export default function SoftwareSkill({isDark}) {
  return (
    <div className="software-skills-main-div">
      <div className="skills-grid">
        {skillsSection.softwareSkills.map((skill, i) => (
          <div
            key={i}
            className={isDark ? "skill-item skill-item-dark" : "skill-item"}
          >
            <div
              className={
                isDark
                  ? "skill-icon-wrap skill-icon-wrap-dark"
                  : "skill-icon-wrap"
              }
            >
              <img
                src={skill.svgIconPath}
                alt={skill.skillName}
                className="skill-icon"
              />
            </div>
            <p className={isDark ? "skill-label skill-label-dark" : "skill-label"}>
              {skill.skillName}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}
