import React, { useState, useEffect } from "react";
import axios from "axios";
import Navbar from "./Navbar";
import Footer from "./Footer";
import "../styles/Movies.css";
import { useNavigate } from "react-router-dom";

const API_KEY = "97229d56808eecfa5517eb9f89929803";
const API_URL = "https://api.themoviedb.org/3";

const TVShow = () => {
  const [movies, setMovies] = useState([]);
  const [bannerMovies, setBannerMovies] = useState([]);
  const [currentSlide, setCurrentSlide] = useState(0);
  const [searchQuery, setSearchQuery] = useState("");
  const [loading, setLoading] = useState(false);
  const [isTransitioning, setIsTransitioning] = useState(true);
  const navigate = useNavigate();

  // Fetch Movies
  useEffect(() => {
    const fetchMovies = async () => {
      try {
        setLoading(true);
        const [popularResponse, bannerResponse] = await Promise.all([
          axios.get(
            `${API_URL}/movie/popular?api_key=${API_KEY}&language=en-US`
          ),
          axios.get(
            `${API_URL}/movie/top_rated?api_key=${API_KEY}&language=en-US`
          ),
        ]);
        setMovies(popularResponse.data.results);
        setBannerMovies(bannerResponse.data.results.slice(0, 5)); // Limit banner movies
        setLoading(false);
      } catch (error) {
        console.error("Error fetching movies:", error);
        setLoading(false);
      }
    };
    fetchMovies();
  }, []);

  // Navigate to movie details
  const handleCardClick = (movie) => {
    navigate(`/details/${movie.id}`, { state: { data: movie } });
  };

  // Auto-slide logic for the banner
  useEffect(() => {
    const interval = setInterval(() => {
      setIsTransitioning(true);
      setCurrentSlide((prevSlide) => (prevSlide + 1) % bannerMovies.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [bannerMovies.length]);

  // Search movies
  const handleSearch = async (query) => {
    setSearchQuery(query);
    try {
      setLoading(true);
      const endpoint =
        query.trim() === ""
          ? `${API_URL}/movie/popular?api_key=${API_KEY}&language=en-US`
          : `${API_URL}/search/movie?api_key=${API_KEY}&language=en-US&query=${query}`;
      const response = await axios.get(endpoint);
      setMovies(response.data.results || []);
      setLoading(false);
    } catch (error) {
      console.error("Error searching movies:", error);
      setLoading(false);
    }
  };

  return (
    <>
      <Navbar />
      <div className="movie-page">
        {/* Banner Section */}
        <div className="relative overflow-hidden bg-gray-900">
          {bannerMovies.length > 0 && (
            <div
              className={`flex transition-transform ${
                isTransitioning ? "duration-1000 ease-linear" : ""
              }`}
              style={{
                transform: `translateX(-${currentSlide * 100}%)`,
              }}
            >
              {bannerMovies.map((movie, index) => (
                <div
                  key={index}
                  className="flex-shrink-0 w-full h-96 bg-cover bg-center text-white"
                  style={{
                    backgroundImage: `url(https://image.tmdb.org/t/p/original${movie.backdrop_path})`,
                  }}
                >
                  <div className="flex flex-col justify-center items-start bg-gradient-to-t from-black via-transparent to-transparent h-full p-8">
                    <h2 className="text-3xl font-bold">{movie.title}</h2>
                    <p className="mt-2 text-sm text-gray-300">
                      {movie.overview?.substring(0, 100)}...
                    </p>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Search Bar */}
        <div className="flex justify-center mt-6">
          <form
            onSubmit={(e) => {
              e.preventDefault();
              handleSearch(searchQuery);
            }}
            className="flex w-full max-w-lg items-center gap-2"
          >
            <input
              type="text"
              placeholder="Search for a movie..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full px-4 py-2 rounded-l-md border border-gray-300 focus:outline-none focus:ring focus:ring-blue-500 text-black"
            />
            <button
              type="submit"
              className="px-4 py-2 bg-blue-500 text-white rounded-r-md hover:bg-blue-600"
            >
              Search
            </button>
          </form>
        </div>

        {/* Loading Indicator */}
        {loading && (
          <p className="text-center text-yellow-400 mt-4">Loading movies...</p>
        )}

        {/* Movie Cards Section */}
        <div className="movie-page-container">
          {movies.length === 0 && !loading ? (
            <p className="text-center text-red-500 mt-4">No movies found.</p>
          ) : (
            <div className="grid-container">
              {movies.map((movie) => (
                <div
                  key={movie.id}
                  className="movie-card group"
                  onClick={() => handleCardClick(movie)}
                >
                  <div className="poster-container">
                    <img
                      src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                      alt={movie.title}
                      className="movie-poster"
                    />
                  </div>
                  <div className="movie-details">
                    <h3 className="title">{movie.title}</h3>
                    <p className="rating">
                      <strong>Rating:</strong>{" "}
                      {movie.vote_average?.toFixed(1) || "N/A"}
                    </p>
                    <p className="release-date">
                      <strong>Release Date:</strong>{" "}
                      {movie.release_date || "N/A"}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
      <Footer />
    </>
  );
};

export default TVShow;
