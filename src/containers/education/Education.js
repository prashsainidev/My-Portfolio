import React, {useContext} from "react";
import "./Education.scss";
import EducationCard from "../../components/educationCard/EducationCard";
import {educationInfo} from "../../portfolio";
import StyleContext from "../../contexts/StyleContext";

export default function Education() {
  const {isDark} = useContext(StyleContext);

  if (!educationInfo.display) {
    return null;
  }

  return (
    <div className="education-section" id="education">
      <div className="education-header">
        <span
          className={
            isDark ? "education-eyebrow education-eyebrow-dark" : "education-eyebrow"
          }
        >
          Education
        </span>
        <h1 className={isDark ? "education-heading education-heading-dark" : "education-heading"}>
          {educationInfo.title}
        </h1>
        <p
          className={
            isDark
              ? "education-subtitle education-subtitle-dark"
              : "education-subtitle"
          }
        >
          {educationInfo.subtitle}
        </p>
      </div>
      <div className="education-card-container">
        {educationInfo.schools.map((school, index) => (
          <EducationCard key={index} school={school} />
        ))}
      </div>
    </div>
  );
}
