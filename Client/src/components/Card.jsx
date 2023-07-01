import React, { useState, useEffect } from 'react';
import styles from './Card.module.css';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { addFav, removeFav } from '../redux/actions';

function Card({id,name, status, species, gender, origin, image, onClose, addFav, removeFav, myFavorites}) {
  const [isFav, setIsFav] = useState(false);

  useEffect(() => {
    for (let i = 0; i < myFavorites.length; i++) {
      if (myFavorites[i].id === id) {
        setIsFav(true);
        break;
      }
    }
  }, [myFavorites]);

  function handleFavorite() {
    if (isFav) {
      setIsFav(false);
      removeFav(id);
    } else {
      setIsFav(true);
      addFav({id,name,status,species,gender,origin,image});
    }
  }

  return (
    <div className={styles.card}>
      <button className={styles.button} onClick={() => onClose(id)}>X</button>
      <img className={styles.cardImg} src={image} alt={name} />
      <div className={styles.details}>
        <Link to={`/detail/${id}`}>
          <h2 className={styles.h2}>{name}</h2>
        </Link>
        <h3 className={styles.h3}>Status: {status}</h3>
        <h3 className={styles.h3}>Species: {species}</h3>
        <h3 className={styles.h3}>Gender: {gender}</h3>
        <h3 className={styles.h3}>Origin: {origin}</h3>
      </div>
      {isFav ? (
        <button onClick={handleFavorite}>❤️</button>
      ) : (
        <button onClick={handleFavorite}>🤍</button>
      )}
    </div>
  );
}

function mapStateToProps(state) {
  return {
    myFavorites: state.myFavorites
  };
}

function mapDispatchToProps(dispatch) {
  return {
    addFav: character => dispatch(addFav(character)),
    removeFav: id => dispatch(removeFav(id))
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Card);

//export default function Card({name, status, species, gender, origin, image, onClose}) {
  //return (
//        <div>
 //         <button onClick={onClose}>X</button>
   //       <h2>{name}</h2>
     //     <h2>{status}</h2>
       //   <h2>{species}</h2>
         // <h2>{gender}</h2>
      //    <h2>{origin}</h2>
        //  <img src={image} alt={name} />
      //  </div>
   // );
    //}
