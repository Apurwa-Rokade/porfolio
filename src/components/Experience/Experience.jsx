import React from 'react';
import history from '../../data/history.json'
import styles from './Experience.module.css';
import { getImageUrl } from '../../utils';

const Experience = () => {
  return (
    <section className={styles.history} id="experience">
        <h2 className={styles.title}>Experienece</h2>
       <ul className={styles.content}>
       {
         history.map((items,id) =>{
          return(
            <li key={id} className={styles.historyItem}>
              <img src={getImageUrl(items.imageSrc)} alt={`${items.organisation} logo`}/>
             <div className={styles.historyItemDetails}>
              <h3>
                {`${items.role}, ${items.organisation}`}
              </h3>
              <p>
              {`${items.startDate} - ${items.endDate}`}
              </p>
              <ul>
                {
                  items.experiences.map((experience,id)=>{
                    return <li key={id}>
                    {experience}
                    </li>
                  })
                }
              </ul>
             </div>
            </li>
          )
         })
       }

      </ul>
    </section>
  )
}

export default Experience