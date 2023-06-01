import React, { useState } from 'react';
import styles from './SearchBar.module.css';

export default function SearchBar({ onSearch }) {
  const [id, setId] = useState('');
  const [showContent, setShowContent] = useState(false);

  const handleRandom = () => {
    const randomId = Math.floor(Math.random() * 826) + 1;
    onSearch(randomId);
  };

  return (
    <>
      <div className={styles.searchIcon} onClick={() => setShowContent(!showContent)}>
        🔍
      </div>
      {showContent && (
        <div
        className={`${styles.searchContent} ${
          showContent ? styles.searchContentExpanded : ""
        }`}
      >
      
          <div>
            <input
              type="search"
              onChange={(event) => setId(event.target.value)}
              value={id}
              className={styles.searchInput}
              placeholder="ID"
            />
            <button onClick={() => onSearch(id)} className={styles.searchButton}>
              Agregar
            </button>
            <button onClick={handleRandom} className={styles.randomButton}>
              Personaje aleatorio
            </button>
          </div>
        </div>
      )}
    </>
  );
}
