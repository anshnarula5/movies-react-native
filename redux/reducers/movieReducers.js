export const movieListReducer = (state = { movies: [] }, action) => {
  const { type, payload } = action;
  switch (type) {
    case "GET_MOVIES_REQUEST":
      return { loading: true };
    case "GET_MOVIES_SUCCESS":
      return { loading: false, movies: payload };
    default:
      return state;
  }
};
export const movieDetailsReducer = (state = { details: {} }, action) => {
  const { type, payload } = action;
  switch (type) {
    case "GET_DETAILS_REQUEST":
      return { loading: true };
    case "GET_DETAILS_SUCCESS":
      return { loading: false, details: payload };
    default:
      return state;
  }
};
