export const createJoke = joke => {
  return {
    type: "CREATE_JOKE",
    payload: joke
  };
};

export const deleteJoke = jokeId => {
  return {
    type: "DELETE_JOKE",
    payload: jokeId
  };
};
