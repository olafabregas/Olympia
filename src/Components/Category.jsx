import React, { useRef, useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import "../styles/Category.css";

const API_URL = "https://api.themoviedb.org/3";
const API_KEY = "your_api_key";

const Category = ({ category, movies }) => {
  const navigate = useNavigate();
  const scrollRef = useRef(null);

  const detailsNavigate = (data) => {
    navigate("/details", {
      state: { data },
    });
  };

  const scrollRight = () => {
    scrollRef.current.scrollBy({ left: 300, behavior: "smooth" });
  };

  const scrollLeft = () => {
    scrollRef.current.scrollBy({ left: -300, behavior: "smooth" });
  };

  return (
    <div className="category-container">
      {/* Header */}
      <div className="category-header">
        <h1 className="olympia-title">Olympia</h1>
        <h2 className="category-title">{category} Movies</h2>
      </div>

      {/* Movie List with Navigation */}
      <div className="category-content">
        {/* Left Scroll Button */}
        <button className="scroll-button left" onClick={scrollLeft}>
          &lt;
        </button>

        {/* Movie List */}
        <div
          className="movie-list"
          ref={scrollRef}
          style={{ position: "relative" }}
        >
          {movies.length > 0 ? (
            movies.map((data) => (
              <div
                key={data.id}
                className="movie-card"
                onClick={() => detailsNavigate(data)}
              >
                <div className="poster-container">
                  <img
                    src={
                      data?.poster_path
                        ? `https://image.tmdb.org/t/p/w500${data.poster_path}`
                        : "https://via.placeholder.com/500x750?text=No+Image"
                    }
                    alt={`${data.title || "Movie"} poster`}
                    className="movie-poster"
                  />
                </div>
                <div className="movie-details">
                  <p className="movie-title">{data.title || "Untitled"}</p>
                  <p className="movie-rating">
                    Rating: {data.vote_average || "N/A"}
                  </p>
                </div>
              </div>
            ))
          ) : (
            <p className="no-movies">No movies available.</p>
          )}
        </div>

        {/* Right Scroll Button */}
        <button className="scroll-button right" onClick={scrollRight}>
          &gt;
        </button>
      </div>
    </div>
  );
};

export default Category;
