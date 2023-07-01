import React, { useState, useEffect } from 'react';
import { Routes, Route, useLocation, useNavigate } from 'react-router-dom';
import axios from 'axios';
import './App.css';
import Nav from './components/Nav';
import Cards from './components/Cards';
import About from './components/About';
import Detail from './components/Detail';
import Error from './components/Error';
import Form from './components/Form';
import styles from './components/Background.module.css';
import WebFont from 'webfontloader';
import Favorites from './components/Favorites';
import { useDispatch } from 'react-redux';
import { removeFav } from './redux/actions';

function App() {
  const [characters, setCharacters] = useState([]);
  const [access, setAccess] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();
  const EMAIL = 'hola@example.com';
  const PASSWORD = 'tu-contraseña';

  useEffect(() => {
    if (!access) {
      navigate('/');
    }
  }, [access]);

  function login(userData) {
    const { email, password } = userData;
    const URL = 'http://localhost:3001/rickandmorty/login/';
    axios(URL + `?email=${email}&password=${password}`).then(({ data }) => {
       const { access } = data;
       setAccess(data);
       access && navigate('/home');
    });
 }

  const onSearch = (id) => {
    if (characters.some((character) => character.id === parseInt(id))) {
      window.alert('¡Este personaje ya está en pantalla!');
      return;
    }
    
    axios(`http://localhost:3001/rickandmorty/character/${id}`)
      .then(({ data }) => {
        if (data.name) {
          setCharacters((oldChars) => [...oldChars, data]);
        } else {
          window.alert('¡No hay personajes con este ID!');
        }
      })
      .catch((error) => {
        if (error.response && error.response.status === 404) {
          window.alert('¡No hay personajes con este ID!');
        } else {
          window.alert('Ocurrió un error al buscar el personaje.');
        }
      });
  };

  const dispatch = useDispatch();

const onClose = (id) => {
  setCharacters((prevCharacters) =>
    prevCharacters.filter((character) => character.id !== parseInt(id))
  );
  dispatch(removeFav(id));
};
  

  WebFont.load({
    google: {
      families: ['Helvetica']
    }
  });
  
  return (
    <div className="App">
      <div className={styles.space} />
      {access && <Nav onSearch={onSearch} />}
      <Routes>
        <Route path="/" element={<Form login={login} />} />
        <Route
          path="/home"
          element={<Cards characters={characters} onClose={onClose} />}
        />
        <Route path="/about" element={<About />} />
        <Route path="/detail/:id" element={<Detail />} />
        <Route path="*" element={<Error />} />
        <Route path="/favorites" element={<Favorites onClose={onClose} />} />
      </Routes>
    </div>
  );
  
}

export default App;
