import React from 'react';
import { useLocation } from 'react-router-dom';
import styles from './Cards.module.css';
import Card from './Card';


export default function Cards({ characters, onClose }) {
  const location = useLocation();
  const isHome = location.pathname === '/home';

  return (
    <div className={styles.container}>
      {isHome && (
        <div className={styles.gifContainer}>
        <img src="/giphy.gif" alt="Morty GIF" />
        </div>
      )}

      {characters.map(({ id, name, status, species, gender, origin, image }) => (
        <Card
          key={id}
          id={id}
          name={name}
          status={status}
          species={species}
          gender={gender}
          origin={origin.name}
          image={image}
          onClose={() => onClose(id)}
        />
      ))}
    </div>
  );
}


//import Card from './Card';     <div className={styles.container}>

//{name, status, species, gender, origin, image, onClose}

//export default function Cards({characters}) {
   // console.log(characters);
//   return <div>{
  //    characters.map(({id,name, status, species, gender, origin, image}) => (
   //      <Card
    //        key={id}
     //       name = {name}
     //       status={status}
    //        species={species}
    //        gender={gender}
      //      origin={origin.name}
      //      image={image}
     //       onClose={() => window.alert('Emulamos que se cierra la card')}
         
         
         
  //       />
 //     ))
  //    }</div>;
//}
