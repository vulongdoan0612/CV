import axios from "axios";
import * as Types from "../Types";
// Khai báo đường dẫn action cho item redux

const API_KEY = '5434f043bde1346a45e6b370dd6391a0';
const BASE_URL = 'https://api.themoviedb.org/3';

export const getNetflixOriginals = () => async dispatch => {
    try {
        const result = await axios.get(
            `${BASE_URL}/discover/tv?api_key=${API_KEY}&with_networks=213`
        );
        dispatch({
          type: Types.GET_NETFLIX_ORIGINALS,
          payload: result.data.results,
        });
    }
    catch (error) {
        console.log('Get netflix api error:',error)
    }
}
export const getTrendingMovies = () => async (dispatch) => {
  try {
    const result = await axios.get(
      `${BASE_URL}/trending/all/week?api_key=${API_KEY}&language=en-US`
    );
    dispatch({
      type: Types.GET_TRENDING_MOVIES,
      payload: result.data.results,
    });
  } catch (error) {
    console.log("Get Trending api error:", error);
  }
};
export const getTopRatedMovies = () => async (dispatch) => {
  try {
    const result = await axios.get(
      `${BASE_URL}/movie/top_rated?api_key=${API_KEY}&language=en-US`
    );
    dispatch({
      type: Types.GET_TOP_RATED_MOVIES,
      payload: result.data.results,
    });
  } catch (error) {
    console.log("Get Top Rated api error:", error);
  }
};
export const getActionMovies = () => async (dispatch) => {
  try {
    const result = await axios.get(
      `${BASE_URL}/discover/movie?api_key=${API_KEY}&with_genres=28`
    );
    dispatch({
      type: Types.GET_ACTION_MOVIES,
      payload: result.data.results,
    });
  } catch (error) {
    console.log("Get Action movies api error:", error);
  }
};
export const getComedyMovies = () => async (dispatch) => {
  try {
    const result = await axios.get(
      `${BASE_URL}/discover/movie?api_key=${API_KEY}&with_genres=35`
    );
    dispatch({
      type: Types.GET_COMEDY_MOVIES,
      payload: result.data.results,
    });
  } catch (error) {
    console.log("Get Comedy movies api error:", error);
  }
};
export const getHorrorMovies = () => async (dispatch) => {
  try {
    const result = await axios.get(
      `${BASE_URL}/discover/movie?api_key=${API_KEY}&with_genres=27`
    );
    dispatch({
      type: Types.GET_HORROR_MOVIES,
      payload: result.data.results,
    });
  } catch (error) {
    console.log("Get Horror movies api error:", error);
  }
};
export const getRomanceMovies = () => async (dispatch) => {
  try {
    const result = await axios.get(
      `${BASE_URL}/discover/movie?api_key=${API_KEY}&with_genres=10749`
    );
    dispatch({
      type: Types.GET_ROMANCE_MOVIES,
      payload: result.data.results,
    });
  } catch (error) {
    console.log("Get Romance movies api error:", error);
  }
};
export const getDocumentariesMovies = () => async (dispatch) => {
  try {
    const result = await axios.get(
      `${BASE_URL}/discover/movie?api_key=${API_KEY}&with_genres=99`
    );
    dispatch({
      type: Types.GET_DOCUMENTARIES_MOVIES,
      payload: result.data.results,
    });
  } catch (error) {
    console.log("Get Documentaries movies api error:", error);
  }
};
export const setMovieDetail = (movie) => dispatch => {
  dispatch({type: Types.SET_MOVIE_DETAIL, payload: movie})
}
export const getSearchMovies = (keywords) => async (dispatch) => {
  try {
    const result = await axios.get(
      `${BASE_URL}/search/multi?api_key=${API_KEY}&language=en-US&include_adult=false&query=${keywords}`
    )
    dispatch({type: Types.GET_SEARCH_MOVIES,payload:result.data.results})
  }
  catch (error) {
    console.log("Get search movies api error:", error);
  }
}