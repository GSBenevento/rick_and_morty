import { ADD_FAV, REMOVE_FAV, FILTER, ORDER, RESET } from "./actions";

const initialState = { myFavorites: [], allCharacterFav: [] };

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_FAV:
      return {
        ...state,
        myFavorites: [...state.allCharacterFav, action.payload],
        allCharacterFav: [...state.allCharacterFav, action.payload],
      };
    case REMOVE_FAV:
      return {
        ...state,
        myFavorites: state.myFavorites.filter(
          (fav) => fav.id != action.payload
        ),
      };
    case FILTER:
      const allCharactersFiltered = state.allCharacterFav.filter(
        (character) => character.gender == action.payload
      );
      return {
        ...state,
        myFavorites: allCharactersFiltered,
      };
    case ORDER:
      const allCharacterFavCopy = [...state.allCharacterFav];
      return {
        ...state,
        myFavorites:
          action.payload == "A"
            ? allCharacterFavCopy.sort((a, b) => a.id - b.id)
            : allCharacterFavCopy.sort((a, b) => b.id - a.id),
      };
    case RESET:
      return {
        ...state,
        myFavorites: state.allCharacterFav,
      };

    default:
      return { ...state };
  }
};

export default reducer;
