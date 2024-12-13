import React from 'react';

function Movies({ movie }) {
  return (
    <div className="movie-details">
      <h1>{movie.title}</h1>
      <p>{movie.overview}</p>
      <p><strong>Release Date:</strong> {movie.release_date}</p>
      <p><strong>Rating:</strong> {movie.vote_average} / 10</p>
      <img
        src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
        alt={movie.title}
        className="movie-poster"
      />
    </div>
  );
}

export default Movies;







// import React from 'react';
// import '.


// const Movies = () => {
//   return (
//     <div className="app">
//       <h1 className="section-title">Movies</h1>

//       {/* Recommended Movies Section */}
//       <div className="movie-section">
//         <h2 className="section-subtitle">Recommended movies</h2>
//         <div className="movie-grid">
//           {/* Add movies dynamically */}
//           {recommendedMovies.map((movie) => (
//             <MovieCard key={movie.id} title={movie.title} image={movie.image} />
//           ))}
//         </div>
//       </div>

//       {/* Top Movies Section */}
//       <div className="movie-section">
//         <h2 className="section-subtitle">
//           Top movies <span className="see-more">See more ➡️</span>
//         </h2>
//         <div className="movie-grid">
//           {/* Add movies dynamically */}
//           {topMovies.map((movie) => (
//             <MovieCard key={movie.id} title={movie.title} image={movie.image} />
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// };

// // Movie Card Component
// const MovieCard = ({ title, image }) => {
//   return (
//     <div className="movie-card">
//       <img src={image} alt={title} className="movie-image" />
//       <p className="movie-title">{title}</p>
//     </div>
//   );
// };

// // Sample Data
// const recommendedMovies = [
//   { id: 1, title: "Righteous Thieves", image: "https://via.placeholder.com/150" },
//   { id: 2, title: "Hitman's Wife's Bodyguard", image: "https://via.placeholder.com/150" },
//   { id: 3, title: "It Blooms in June", image: "https://via.placeholder.com/150" },
//   { id: 4, title: "David vs Goliath", image: "https://via.placeholder.com/150" },
// ];

// const topMovies = [
//   { id: 5, title: "Miss PJ", image: "https://via.placeholder.com/150" },
//   { id: 6, title: "The World Is Not Enough", image: "https://via.placeholder.com/150" },
//   { id: 7, title: "The Betrayed", image: "https://via.placeholder.com/150" },
//   { id: 8, title: "Die Another Day", image: "https://via.placeholder.com/150" },
// ];




// const movies = [
//   { title: 'Hitman\'s Wife\'s Bodyguard', year: 2021 },
//   { title: 'Righteous Thieves', year: 2023 },
//   { title: 'David vs. Goliath', year: 2019 },
// ];

// const Movies = () => {
//   return (
//     <div className="movie-list">
//       <h2>Recommended Movies</h2>
//       <div className="movies">
//         {movies.map((movie, index) => (
//           <div key={index} className="movie-card">
//             <img src={`placeholder_${index}.jpg`} alt={movie.title} />
//             <h3>{movie.title}</h3>
//             <p>{movie.year}</p>
//             <button>Play</button>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };


