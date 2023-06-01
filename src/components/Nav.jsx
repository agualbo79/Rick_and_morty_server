import React from 'react';
import SearchBar from './SearchBar.jsx';
import { Link } from 'react-router-dom';
import styles from './Nav.module.css';

export default function Nav({ onSearch }) {
  const handleRandom = () => {
    const randomId = Math.floor(Math.random() * 826) + 1;
    onSearch(randomId);
  };

  return (
   <nav className={styles.nav}>
     <div className={`${styles.menuContainer} ${styles.menuLeft}`}>
       <div className={styles.links}>
         <div className={styles.logo}>
           <img className={styles.aslogo} src="aslogo.png" alt="Logo" />
         </div>
         <div>
           <img className={styles.logoImg} src="./rick.png" alt="Logo" />
           <Link className={styles.link} to="/home">
             Home
           </Link>
           <Link className={styles.link} to="/about">
             About
           </Link>
           <Link className={styles.link} to="/favorites">
             Fav
           </Link>
           
         </div>
       </div>
     </div>
 
     <div className={`${styles.menuContainer} ${styles.menuRight}`}>
       <div className={styles.searchContainer}>
         <SearchBar onSearch={onSearch} />
       </div>
     </div>
   </nav>
 );
 
 
}
