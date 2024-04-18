import React from 'react';
import styles from './ProjectCart.module.css';
import { FaGithub } from "react-icons/fa";
import { FaExternalLinkAlt } from "react-icons/fa";
import { getImageUrl } from '../../utils';

const ProjectCart = ({project:{title, imageSrc, description, skills, demo, source},}) => {
  return (
    <div className={styles.container} >
       <img
        src={getImageUrl(imageSrc)}
        alt={`Image of ${title}`}
        className={styles.image}
      />
           <h3 className={styles.title}>{title}</h3>
           <p className={styles.description}>{description}</p>
           <ul className={styles.skills}>
            {skills.map((skill,id)=>{
              return (
                <li key={id} className={styles.skill}>
                {skill}
                </li>
              );
            })
              
            }
           </ul>
           <div className={styles.links}>
           <a href={demo} className={styles.link}>
           <FaExternalLinkAlt />
        </a>
        <a href={source} className={styles.link}>
        <FaGithub />
        </a>
            </div>  
          </div>
  )
}

export default ProjectCart