import React from 'react'
import { getImageUrl } from '../../utils'
import styles from './About.module.css'

const About = () => {
  return (
  <section className={styles.container} id="about">
     <h2 className={styles.title}>About</h2>
    
     
      <ul className={styles.aboutItems}>
        <li className={styles.aboutItem}>
          <img src={getImageUrl("about/cursorIcon.png") } alt="cursorIcon" />
          <div>
            <h3>Frontend Developer</h3>
            <p>As a passionate frontend developer, I bring expertise in JavaScript, HTML, CSS, ReactJS, and a deep understanding of UI libraries and modern frameworks to the table. My forte lies in crafting responsive web applications and seamlessly integrating REST APIs. I am dedicated to creating visually stunning and user-friendly interfaces that elevate user experiences.</p>
          </div>
        </li>
      </ul>
    
  </section>
  )
}

export default About