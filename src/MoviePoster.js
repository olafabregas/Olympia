import React from 'react';

function MoviePoster({ posterUrl, altText }) {
  return (
    <div className="movie-poster">
      <img src={posterUrl} alt={altText} />
      
    </div>
  );
}

export default MoviePoster;



// import React, { useState, useEffect } from 'react';
// import {fetchMovies} from "./Api";
// //import axios from 'axios';
// import Movies from './Movies';
// import './Movielist.css';

// const Movielist = () => {
//   const [movies, setMovies] = useState([]);

// useEffect(() => {
//   const getMovies = async () => {
//     const movieData = await fetchMovies();
//     setMovies(movieData);
//   };
//   getMovies();
// }, []);

// return (
//   <div className="movie-list">
//     {movies.map((movie) => (
//       <Movies key={movie.id} movie={movie} />
//     ))}
//   </div>
// );
// };

// export default Movielist;