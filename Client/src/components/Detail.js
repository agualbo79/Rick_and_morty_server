import axios from 'axios';
import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import styles from './Card.module.css';

function Detail() {
  const { id } = useParams();
  const [character, setCharacter] = useState({});

  useEffect(() => {
    axios(`http://localhost:3001/rickandmorty/character/${id}`)
      .then(({ data }) => {
        if (data.name) {
          setCharacter(data);
        } else {
          window.alert('No hay personajes con ese ID');
        }
      })
      .catch((error) => {
        window.alert('Ocurrió un error al buscar el personaje');
      });

    return () => setCharacter({});
  }, [id]);

  return (
    <div className={styles.card}>
    <h2 className={styles.h2}>{character.name}</h2>
    <img className={styles.img} src={character.image} alt={character.name} />
    <div className={styles.details}>
    <h3 className={styles.h3}>Status: {character.status}</h3>
    <h3 className={styles.h3}>Species: {character.species}</h3>
    <h3 className={styles.h3}>Gender: {character.gender}</h3>
    <h3 className={styles.h3}>Origin: {character.origin && character.origin.name}</h3>
    </div>
    </div>
   );
   
}

export default Detail;
