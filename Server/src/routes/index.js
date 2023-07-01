// Importamos todos los controladores
const { getCharById } = require('../controllers/getCharById.js');
const { login } = require('../controllers/login.js');
const { postFav, deleteFav } = require('../controllers/handleFavorites.js');

// Importamos la función Router de express
const { Router } = require('express');

// Creamos un router
const router = Router();

// Creamos una ruta para cada controlador con el path indicado
router.get('/character/:id', getCharById);
router.get('/login', login);
router.post('/fav', postFav);
router.delete('/fav/:id', deleteFav);

// Exportamos el router
module.exports = router;
