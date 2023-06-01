import React, { useEffect } from 'react';
import styles from './About.module.css';

function About() {
 let current = 1;
 const height = 50;
 const numberDivs = 5;

 useEffect(() => {
 const first = document.querySelector(`.${styles.roles} div:nth-child(1)`);
 const interval = setInterval(() => {
 const number = current * -height;
 first.style.marginTop = `${number}px`;
 if (current === numberDivs) {
 first.style.marginTop = '0px';
 current = 1;
 } else current++;
 }, 2000);
 return () => clearInterval(interval);
 }, []);

 return (
 <div className={styles.wrapperAbout}>
<a href="https://agustinvallejo.com.ar">
 <img src="/avatar.png" alt="Avatar" className={styles.avatar} />
 </a>
 <div className={styles.roles}>
 <div> I am a graphic designer. </div>
 <div> I am a programming student. </div>
 <div> I am a web developer. </div>
 <div> I am a fan of science fiction movies. </div>
 <div> click on the avatar  </div>
 </div>
 </div>
 );
}

export default About;


