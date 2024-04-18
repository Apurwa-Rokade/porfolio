import React from 'react'
import { getImageUrl } from '../../utils';
import styles from './Hero.module.css';
import { FaDownload } from "react-icons/fa6";

const Hero = () => {
  return (
   <section className={styles.container}>
   <div className={styles.content}>
   <h1 className={styles.title}>Hi, I'm Apurva.</h1>
    <p className={styles.description}>
    Frontend developer with nearly 2 years of experience. Let's connect and explore how we can work together to build a better digital world.
    </p>
   <div className={styles.btncontainer}>
   <a href = "mailto:apurwa.rokade@gmail.com" className={styles.contactbtn}>Contact Me</a>
    <a href = "https://drive.google.com/file/d/1jYGQ609NJZEaXhJghuErcQuU7xo5x51m/view"
     className={styles.contactbtn}>Resume <FaDownload />
</a>
   </div>
   </div>
    <img src={getImageUrl("hero/heroImage2.png") } alt="hero" className={styles.heroimg}/>
    <div className={styles.topBlur} />
      <div className={styles.bottomBlur} />
   </section>
  )
}

export default Hero;