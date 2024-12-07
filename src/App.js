import React, {useState, useEffect} from "react";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import "./App.css";
import Home from "./Components/Home";
import Footer from "./Footer";
import MoviePage from "./MoviePage";
import SearchBar from "./SearchBar";

import axios from "axios";
import MovieList from "./MovieList";
import ThankYou from "./ThankYou";


const API_KEY = '97229d56808eecfa5517eb9f89929803';
const API_URL = `https://api.themoviedb.org/3/`;



function App() {
  const [searchQuery, setSearchQuery] = useState('');
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(false);
  const [totalPages, setTotalPages] = useState(1);
  const [currentPage, setCurrentPage] = useState(1);

  const fetchMovies = async (query = '', page = 1) => {
    setLoading(true);
    const url = query
      ? `${API_URL}search/movie?api_key=${API_KEY}&query=${query}&page=${page}&language=en-US`
      : `${API_URL}movie/popular?api_key=${API_KEY}&page=${page}&language=en-US`;

    try {
      const response = await axios.get(url);
      setMovies(response.data.results);
      setTotalPages(response.data.total_pages);
    } catch (error) {
      console.error('Error fetching data:', error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchMovies(searchQuery, currentPage);
  }, [searchQuery, currentPage]);

  return (
    <Router>
      <Home />
      <div className="App">
        <SearchBar setSearchQuery={setSearchQuery} />
        <Routes>
          <Route
            path="/"
            element={
              <MovieList
                movies={movies}
                loading={loading}
                currentPage={currentPage}
                setCurrentPage={setCurrentPage}
                totalPages={totalPages}
              />
            }
          />
          <Route path="/movie/:movieId" element={<MoviePage />} />
          {/* <Route path="/thank-you" component={ThankYou} />
          <Route path="/" component={Home} /> */}
        </Routes>
      </div>
     
      <Footer />
       <Routes>
       {/* <Route path="/thank-you" component={ThankYou} />
       <Route path="/" component={Home} /> */}
      </Routes> 
    </Router>
    
  );
}

export default App;
    
 


