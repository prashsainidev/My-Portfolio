import React, {useContext} from "react";
import {Fade} from "react-reveal";
import "./EducationCard.scss";
import StyleContext from "../../contexts/StyleContext";

export default function EducationCard({school}) {
  const {isDark} = useContext(StyleContext);

  if (!school.logo) {
    console.error(`Image of ${school.schoolName} is missing in education section`);
  }

  return (
    <Fade bottom duration={1200} distance="20px">
      <div className={isDark ? "education-card education-card-dark" : "education-card"}>
        {school.logo && (
          <div className="education-card-left">
            <div className={isDark ? "education-logo-shell education-logo-shell-dark" : "education-logo-shell"}>
              <img
                crossOrigin="anonymous"
                className="education-roundedimg"
                src={school.logo}
                alt={school.schoolName}
              />
            </div>
          </div>
        )}

        <div className="education-card-right">
          <div className="education-meta-row">
            <span className={isDark ? "education-duration education-duration-dark" : "education-duration"}>
              {school.duration}
            </span>
            {school.grade && (
              <span className={isDark ? "education-grade education-grade-dark" : "education-grade"}>
                {school.grade}
              </span>
            )}
          </div>

          <h5 className={isDark ? "education-text-school education-text-school-dark" : "education-text-school"}>
            {school.schoolName}
          </h5>

          <h6
            className={
              isDark
                ? "education-text-subHeader education-text-subHeader-dark"
                : "education-text-subHeader"
            }
          >
            {school.subHeader}
          </h6>

          <p className={isDark ? "education-text-desc education-text-desc-dark" : "education-text-desc"}>
            {school.desc}
          </p>

          {school.descBullets?.length ? (
            <ul className="education-text-bullets">
              {school.descBullets.map((item, i) => (
                <li key={i} className={isDark ? "education-bullet education-bullet-dark" : "education-bullet"}>
                  {item}
                </li>
              ))}
            </ul>
          ) : null}
        </div>
      </div>
    </Fade>
  );
}
