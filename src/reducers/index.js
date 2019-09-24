import { combineReducers } from "redux";

const jokesOperations = (jokesList = [], action) => {
  if (action.type === "CREATE_JOKE") {
    return [...jokesList, action.payload];
  } else if (action.type === "DELETE_JOKE") {
    return jokesList.filter(joke => joke._id !== action.payload);
  }
  return jokesList;
};

export default combineReducers({
  jokes: jokesOperations
});
