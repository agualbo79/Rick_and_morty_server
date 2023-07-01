let myFavorites = [];

const postFav = (req, res) => {
  const character = req.body;
  myFavorites.push(character);
  res.json(myFavorites);
}

const deleteFav = (req, res) => {
  const id = req.params.id;
  myFavorites = myFavorites.filter(character => character.id !== id);
  res.json(myFavorites);
}

export { postFav, deleteFav };
