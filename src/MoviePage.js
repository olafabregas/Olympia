import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import Movies from './Movies';
import axios from 'axios';
//import MoviePoster from './MoviePoster';

const API_KEY = '97229d56808eecfa5517eb9f89929803';
const API_URL = `https://api.themoviedb.org/3/movie/`;

function MoviePage() {
  const { movieId } = useParams(); // Get the movieId from the URL
  const [movie, setMovie] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchMovie = async () => {
        setLoading(true);
        try {
          const response = await axios.get(
            `${API_URL}${movieId}?api_key=${API_KEY}&language=en-US`
          );
          setMovie(response.data);
        } catch (error) {
          console.error('Error fetching movie data:', error);
        } finally {
          setLoading(false);
        }
      };
  
      fetchMovie();
    }, [movieId]);
  
    if (loading) return <div>Loading...</div>;
  
    return (
      <div className="movie-page">
        <Movies movie={movie} />
      </div>
    );
  }
export default MoviePage;
