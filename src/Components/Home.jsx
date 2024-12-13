import React, { useEffect, useState } from "react";
import { Carousel } from "react-responsive-carousel";
import Navbar from "./Navbar";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import Category from "./Category";
import Footer from "../Footer";
import axios from "axios";
import SearchBar from "../SearchBar";
import "../styles/Home.css";

const API_KEY = "97229d56808eecfa5517eb9f89929803";
const API_URL = "https://api.themoviedb.org/3";

const categories = [
  { id: 28, name: "Action" },
  { id: 35, name: "Comedy" },
  { id: 27, name: "Horror" },
  { id: 53, name: "Thriller" },
  { id: 10749, name: "Romance" },
  { id: 99, name: "Documentary" },
];

const Home = () => {
  const [moviesByCategory, setMoviesByCategory] = useState({});
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [bannerMovies, setBannerMovies] = useState([]);
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(true);

  const fetchMoviesByCategory = async () => {
    const moviesData = {};
    for (let category of categories) {
      try {
        const response = await axios.get(
          `${API_URL}/discover/movie?api_key=${API_KEY}&with_genres=${category.id}`
        );
        moviesData[category.name] = response.data.results || [];
      } catch (error) {
        console.error(`Error fetching ${category.name} movies:`, error);
        moviesData[category.name] = []; // Handle failure by returning an empty list
      }
    }
    setMoviesByCategory(moviesData);
  };

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
        setBannerMovies(bannerResponse.data.results.slice(0, 8));
        setLoading(false);
      } catch (error) {
        console.error("Error fetching movies:", error);
        setLoading(false);
      }
    };
    fetchMovies();
  }, []);

  useEffect(() => {
    fetchMoviesByCategory();
  }, []);

  // Auto-slide logic for the banner
  useEffect(() => {
    const interval = setInterval(() => {
      setIsTransitioning(true);
      setCurrentSlide((prevSlide) => (prevSlide + 1) % bannerMovies.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [bannerMovies.length]);

  return (
    <>
      <Navbar />
      <div className="grid grid-rows-2 bg-none w-screen mt-[15vh]">
        <div className="relative overflow-hidden bg-none mb-0">
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
        {/* Dynamic Categories */}
        {categories.map((category) => (
          <div key={category.id}>
            <Category
              category={category.name}
              movies={moviesByCategory[category.name] || []}
            />
          </div>
        ))}
      </div>

      <Footer />
    </>
  );
};

export default Home;
