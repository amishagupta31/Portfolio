import React from "react";

import styles from "./Experience.module.css";
import skills from "../../data/skills.json";
import history from "../../data/history.json";
import { getImageUrl } from "../../utils";

export const Experience = () => {
  return (
    <section className={styles.container} id="experience">
    <h2 className={styles.title}>Skills</h2>
    <div className={styles.content}>
      <div className={styles.skills}>
        {skills?.length > 0 ? (
          skills.map((skill, id) => (
            <div key={id} className={styles.skill}>
              <div className={styles.skillImageContainer}>
                <img src={getImageUrl(skill.imageSrc)} alt={skill.title}
                layout="fill" />
              </div>
              <p>{skill.title}</p>
            </div>
          ))
        ) : (
          <p>No skills available</p> // Fallback in case skills is empty or undefined
        )}
      </div>
    </div>
  </section>
  );
}  