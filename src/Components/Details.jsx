/* eslint-disable jsx-a11y/alt-text */
import React from "react";
import Navbar from "./Navbar";
import { useLocation, useNavigate } from "react-router-dom";
import movie from "../Assets/movie.png";
import { auth } from "../Components/firebase/setup";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Footer from "./Footer";

const Details = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const trailerNavigate = (id) => {
    auth.currentUser?.emailVerified
      ? navigate("/trailer", {
          state: { id },
        })
      : toast.warning("Please login to watch trailers!");
  };

  return (
    <>
      <Navbar />

      <ToastContainer autoClose={2000} />
      <div
        className="details-container h-screen w-full text-white pl-16 pt-20 mt-[15vh]"
        style={{
          backgroundImage: `linear-gradient(to right, rgba(0, 0, 0, 0.9), rgba(0, 0, 0, 0.4)), 
            url(https://image.tmdb.org/t/p/w1280${location?.state?.data?.poster_path})`,
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        {/* Header */}
        <div className="text-right pr-16">
          <h1 className="bg-blue-800 bg-clip-text text-transparent font-bold text-4xl uppercase">
            Olympia
          </h1>
        </div>

        {/* Movie Details */}
        <div className="movie-details mt-8 max-w-5xl">
          <h1 className="text-6xl font-bold mb-6">
            {location?.state?.data?.title}
          </h1>
          <p className="text-2xl font-light mb-8 leading-relaxed">
            {location?.state?.data?.overview || "No description available."}
          </p>
          <div className="flex items-center gap-8 font-medium text-xl text-gray-300">
            <span>
              {location?.state?.data?.original_language.toUpperCase()}
            </span>
            <span>
              {new Date(
                location?.state?.data?.release_date
              ).toLocaleDateString()}
            </span>
            <button
              className="bg-sky-500 text-white rounded-full p-3 flex items-center justify-center hover:bg-sky-700 transition"
              onClick={() => trailerNavigate(location?.state?.data?.id)}
            >
              <img src={movie} alt="Play trailer" className="w-8 h-8" />
            </button>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
};

export default Details;
