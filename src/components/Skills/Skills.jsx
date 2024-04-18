import React from 'react';
import skills from '../../data/skills.json';
import history from '../../data/history.json'
import { getImageUrl } from '../../utils';
import styles from "./Skills.module.css";
const Skills = () => {
  return (
    <section id="skills" className={styles.container}>
      <h2 className={styles.title}>Skills</h2>
     <div className={styles.content}>
     <div className={styles.skills}>
        {
          skills.map((skill,id)=>{
            return <div className={styles.skill}key ={id}>
              <div className={styles.skillimgcontainer}><img src={skill.imageSrc}  width="75" height="75" alt={skill.title} /></div>
              <p>{skill.title}</p>

            </div>
          })
        }
      </div>
     
     </div>

    </section>
  )
}

export default Skills;