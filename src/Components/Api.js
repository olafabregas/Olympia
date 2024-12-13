import axios from "axios";

const API_KEY = "97229d56808eecfa5517eb9f89929803"; 
const BASE_URL = "https://themoviedb.org/";

export const fetchMovies = async () => {
  const response = await axios.get(`${BASE_URL}/movie/popular?97229d56808eecfa5517eb9f89929803=${API_KEY}`);
  return response.data.results;
};