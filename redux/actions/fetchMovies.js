import axios from "axios";

export const fetchMovies = () => async (dispatch) => {
    try {
    dispatch({ type: "GET_MOVIES_REQUEST"});
    const res = await axios.get(
      `https://api.themoviedb.org/3/trending/all/day?api_key=3075ded08ee9e418eafcfb6da8a1d5ea`
      );
    dispatch({ type: "GET_MOVIES_SUCCESS", payload: res.data.results });
  } catch (error) {
    console.log(error);
  }
};
