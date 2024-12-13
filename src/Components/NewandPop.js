import React, { useEffect, useState } from "react";
import axios from "axios";
import "../styles/NewandPop.css";
import Navbar from "./Navbar";
import Footer from "./Footer";

const NewPop = () => {
  // State variables to store data
  const [latestMovies, setLatestMovies] = useState([]);
  const [popularMovies, setPopularMovies] = useState([]);
  const [latestTvShows, setLatestTvShows] = useState([]);
  const [popularTvShows, setPopularTvShows] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // API key and base URL for TMDB
  const API_KEY = "78da9a4f8b28f63c8024ad40a1fbb840";
  const BASE_URL = "https://api.themoviedb.org/3";

  // useEffect hook to fetch data on component mount
  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true); // Set loading state to true before fetching

        // Fetch data concurrently using Promise.all
        const [
          latestMoviesResponse,
          popularMoviesResponse,
          latestTvShowsResponse,
          popularTvShowsResponse,
        ] = await Promise.all([
          axios.get(
            `${BASE_URL}/movie/now_playing?api_key=${API_KEY}&language=en-US&page=1`
          ), // Fetch latest movies
          axios.get(
            `${BASE_URL}/movie/popular?api_key=${API_KEY}&language=en-US&page=1`
          ), // Fetch popular movies
          axios.get(
            `${BASE_URL}/tv/on_the_air?api_key=${API_KEY}&language=en-US&page=1`
          ), // Fetch latest TV shows
          axios.get(
            `${BASE_URL}/tv/popular?api_key=${API_KEY}&language=en-US&page=1`
          ), // Fetch popular TV shows
        ]);

        // Update state with the fetched data
        setLatestMovies(latestMoviesResponse.data.results);
        setPopularMovies(popularMoviesResponse.data.results);
        setLatestTvShows(latestTvShowsResponse.data.results);
        setPopularTvShows(popularTvShowsResponse.data.results);
      } catch (error) {
        // Handle errors
        console.error("Error fetching data:", error.message);
        setError("An error occurred. Please try again later.");
      } finally {
        setLoading(false); // Set loading state to false after fetching
      }
    };

    fetchData(); // Call fetchData function
  }, []); // Empty dependency array to run only once on mount

  // Render loading, error, or data
  if (loading) {
    return <div className="loading">Loading...</div>; // Display loading message
  }

  if (error) {
    return <div className="error">{error}</div>; // Display error message
  }

  return (
    <>
      <Navbar />
      <div className="app-container">
        <h1>New & Popular Shows and Movies</h1>

        <h2>Latest Movies</h2>
        <div className="card-container">
          {/* Map through latestMovies and display each one */}
          {latestMovies.map((movie) => (
            <div key={movie.id} className="card">
              <img
                src={
                  movie.poster_path
                    ? `https://image.tmdb.org/t/p/w500${movie.poster_path}`
                    : "/placeholder.jpg"
                }
                alt={movie.title}
                className="card-image"
              />
              <h3>{movie.title}</h3>
              <p>Release Date: {movie.release_date || "N/A"}</p>
            </div>
          ))}
        </div>

        <h2>Popular Movies</h2>
        <div className="card-container">
          {/* Map through popularMovies and display each one */}
          {popularMovies.map((movie) => (
            <div key={movie.id} className="card">
              <img
                src={
                  movie.poster_path
                    ? `https://image.tmdb.org/t/p/w500${movie.poster_path}`
                    : "/placeholder.jpg"
                }
                alt={movie.title}
                className="card-image"
              />
              <h3>{movie.title}</h3>
              <p>Release Date: {movie.release_date || "N/A"}</p>
            </div>
          ))}
        </div>

        <h2>Latest TV Shows</h2>
        <div className="card-container">
          {/* Map through latestTvShows and display each one */}
          {latestTvShows.map((show) => (
            <div key={show.id} className="card">
              <img
                src={
                  show.poster_path
                    ? `https://image.tmdb.org/t/p/w500${show.poster_path}`
                    : "/placeholder.jpg"
                }
                alt={show.name}
                className="card-image"
              />
              <h3>{show.name}</h3>
              <p>First Air Date: {show.first_air_date || "N/A"}</p>
            </div>
          ))}
        </div>

        <h2>Popular TV Shows</h2>
        <div className="card-container">
          {/* Map through popularTvShows and display each one */}
          {popularTvShows.map((show) => (
            <div key={show.id} className="card">
              <img
                src={
                  show.poster_path
                    ? `https://image.tmdb.org/t/p/w500${show.poster_path}`
                    : "/placeholder.jpg"
                }
                alt={show.name}
                className="card-image"
              />
              <h3>{show.name}</h3>
              <p>First Air Date: {show.first_air_date || "N/A"}</p>
            </div>
          ))}
        </div>
      </div>

      <Footer />
    </>
  );
};

export default NewPop;
