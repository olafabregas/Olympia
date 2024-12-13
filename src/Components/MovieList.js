import React from 'react';
import MoviePoster from './MoviePoster';
import { Link } from 'react-router-dom';

function MovieList({ movies, loading, currentPage, setCurrentPage, totalPages }) {
  if (loading) return <div>Loading...</div>;

  return (
    <div className="movie-list">
      {movies.map((movie) => (
        <div className="movie-item" key={movie.id}>
          <Link to={`/movie/${movie.id}`}>
            <MoviePoster
              posterUrl={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
              altText={movie.title}
            />
            <h3>{movie.title}</h3>
          </Link>
        </div>
      ))}
      <div className="pagination">
        <button
          onClick={() => setCurrentPage(Math.max(1, currentPage - 1))}
          disabled={currentPage === 1}
        >
          Prev
        </button>
        <span>
          Page {currentPage} of {totalPages}
        </span>
        <button
          onClick={() => setCurrentPage(Math.min(totalPages, currentPage + 1))}
          disabled={currentPage === totalPages}
        >
          Next
        </button>
      </div>
    </div>
  );
}

export default MovieList;
