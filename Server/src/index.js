import express from 'express';
import { getCharById } from './controllers/getCharById.js';
import cors from 'cors';
import { login } from './controllers/login.js';
import { postFav, deleteFav } from './controllers/handleFavorites.js';

const server = express();
const PORT = 3001;

server.use(cors());
server.use(express.json());

const router = express.Router();
router.get('/character/:id', getCharById);
router.get('/login', login);
router.post('/fav', postFav);
router.delete('/fav/:id', deleteFav);
server.use('/rickandmorty', router);

server.listen(PORT, () => {
   console.log('CORS-enabled web server listening on port ' + PORT);
});
