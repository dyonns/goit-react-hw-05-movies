import axios from "axios"
// https://api.themoviedb.org/3/movie/550?api_key=5f13df01601ab6343ff0c7be1ba59af4



axios.defaults.baseURL = "https://api.themoviedb.org/"
const API_KEY = "5f13df01601ab6343ff0c7be1ba59af4";
const media_type = "all"
const time_window = "day"
const language = "en-US"


export const getMoviesList = () => {
    return axios
        .get(`3/trending/${media_type}/${time_window}`, { params: {  api_key: API_KEY, } })
        .then((res) => res.data);
};


export const getSearchMoviesList = (movie) => {
    return axios
        .get(`3/search/movie`, { params: { api_key: API_KEY, language, query:movie} })
        .then((res) => res.data);
};


export const getMovieDetails = (movie_id) => {
    return axios
        .get(`3/movie/${movie_id}`, { params: { api_key: API_KEY, language} })
        .then((res) => res.data);
};

// get-movie-credits

export const getMovieCredits = (movie_id) => {
    return axios
        .get(`3/movie/${movie_id}/credits`, { params: { api_key: API_KEY, language} })
        .then((res) => res.data);
};

export const getMovieReviews  = (movie_id) => {
    return axios
        .get(`3/movie/${movie_id}/reviews`, { params: { api_key: API_KEY, language} })
        .then((res) => res.data);
};