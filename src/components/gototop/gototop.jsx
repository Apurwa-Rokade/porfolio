import { useEffect, useState } from 'react';
import React from 'react';
import styles from './gototop.module.css';
import { IoIosArrowUp } from "react-icons/io";

const Gototop = () => {
  const [isvisible, setVisible] =useState(false);
  const goToBtn= ()=>{
    window.scrollTo({top:0,behavior :"smooth"})
  };

  const ListentoScroll = () =>{
    let highthidden = 250;
    const winScroll = document.body.scrollTop || document.documentElement.scrollTop;
    if(winScroll>highthidden){
           setVisible(true);
    }
    else{
      setVisible(false);
    }


  }
  useEffect (()=>{
    window.addEventListener("scroll", ListentoScroll)
  })
  return (
   <>
   {isvisible && (<div className={styles.container}>
     <div className={styles.top} onClick={goToBtn}>
     <IoIosArrowUp className={styles.icon}/>
    </div>
   </div>)}
   </>
  )
}

export default Gototop
