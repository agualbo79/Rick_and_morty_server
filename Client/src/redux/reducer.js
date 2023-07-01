
const initialState = {
  myFavorites: [],
  allCharacters: []
};

function myReducer(state = initialState, action) {
  switch (action.type) {
    case 'ADD_FAV':
     case 'ADD_FAV':
  return { ...state, myFavorites: [...state.myFavorites, action.payload] };

    case 'REMOVE_FAV':
      return { ...state, myFavorites: action.payload };
      case "FILTER":
        if (action.payload === null) {
          return {
            ...state,
            myFavorites: state.allCharacters
          };
        } else {
          const filteredCharacters = state.allCharacters.filter(
            character => character.gender === action.payload
          );
          return {
            ...state,
            myFavorites: filteredCharacters
          };
        }
      
    case "ORDER":
      const orderedCharacters = [...state.allCharacters].sort((a, b) => {
        if (action.payload === "A") {
          return a.id - b.id;
        } else if (action.payload === "D") {
          return b.id - a.id;
        }
      });
      return {
        ...state,
        myFavorites: orderedCharacters
      };
    default:
      return state;
  }
}

export default myReducer;
