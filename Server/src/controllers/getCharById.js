import axios from 'axios';

const URL = "https://rickandmortyapi.com/api/character/";

const getCharById = (req, res) => {
  const id = req.params.id;
  axios.get(`${URL}${id}`)
    .then(response => {
      const character = response.data;
      if (character && character.id) {
        res.json({
          id: character.id,
          status: character.status,
          name: character.name,
          species: character.species,
          origin: character.origin.name,
          image: character.image,
          gender: character.gender
        });
      } else {
        res.status(404).send('Not found');
      }
    })
    .catch(error => {
      res.status(500).send(error.message);
    });
}

export { getCharById };

