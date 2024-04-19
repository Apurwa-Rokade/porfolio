import React from 'react';
import { MdEmail } from "react-icons/md";
import { getImageUrl } from '../../utils';
import styles from "./Contact.module.css"

const Contact = () => {
  return (
    <footer className={styles.container} id="contact">
      <div className={styles.text}><h2>Contact</h2>
      <p>Feel free to reach out!!
        </p></div>
        <ul className={styles.links}>
          <li className={styles.link}>
          
        <img src={getImageUrl("contact/emailIcon.png")} alt="Email icon" />
          <a href="mailto:apurwa.rokade@gmail.com">Apurwa.rokade@gmail.com</a>
          </li>
          <li className={styles.link}>
        <img src={getImageUrl("contact/linkedinIcon.png")} alt="Linkedin icon" />
          <a href="https://www.linkedin.com/in/apurva-rokade/">linkedin.com/apurva-rokade/</a>
          </li>

       
          <li className={styles.link}>
        <img src={getImageUrl("contact/githubIcon.png")} alt="Linkedin icon" />
          <a href="https://github.com/Apurwa-Rokade">GitHub.com/apurwa-rokade/</a>
          </li>
        </ul>

    </footer>
  )
}

export default Contact