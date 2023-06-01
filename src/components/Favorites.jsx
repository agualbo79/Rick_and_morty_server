import React, { useState } from "react";
import { connect, useDispatch } from "react-redux";
import Card from "./Card";
import { filterCards, orderCards } from "../redux/actions";

function Favorites({ myFavorites, onClose }) {
  const [aux, setAux] = useState(false);
  const dispatch = useDispatch();

  const handleOrder = (e) => {
    dispatch(orderCards(e.target.value));
    setAux(!aux);
  };

  const handleFilter = (e) => {
    if (e.target.value === "All") {
      dispatch(filterCards(null));
    } else {
      dispatch(filterCards(e.target.value));
    }
  };
  return (
    <div>
      <h2>Favorites</h2>
      <label htmlFor="order">Order by ID:</label>
      <select id="order" onChange={handleOrder}>
        <option value="A">Ascendente</option>
        <option value="D">Descendente</option>
      </select>
      <label htmlFor="filter">Filter by gender:</label>
      <select id="filter" onChange={handleFilter}>
  <option value="All">All</option>
  <option value="Male">Male</option>
  <option value="Female">Female</option>
  <option value="Genderless">Genderless</option>
  <option value="unknown">unknown</option>
</select>

      {myFavorites.map((character) => (
        <Card key={character.id} {...character} onClose={onClose} />
      ))}
    </div>
  );
}

function mapStateToProps(state) {
  return {
    myFavorites: state.myFavorites
  };
}

export default connect(mapStateToProps)(Favorites);

