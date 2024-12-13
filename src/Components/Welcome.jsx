import React, { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../redux/hooks";
import { getMovies } from "../redux/movieSlice";
import { Link } from "react-router-dom";

const Welcome = () => {
  const dispatch = useAppDispatch();

  const movie = useAppSelector((state) => state.movie.data);

  useEffect(() => {
    dispatch(getMovies());
  }, [dispatch]);

  console.log(movie);

  return (
    <div className="bg-black grid grid-cols-2 w-screen text-white mt-[15vh]">
      <div className="p-8">
        <h1 className="text-4xl bg-gradient-to-r from-blue-700 via-purple-700 to-yellow-400 bg-clip-text text-transparent mt-4">
          Welcome to Olympia:<br></br>
          <p className="text-sm text-yellow-400 mt-0">
            Your Gateway to Cinema World
          </p>
        </h1>
        <h1 className="text-2xl text-gray-300 mt-6">
          Discover the latest blockbuster movies, binge-worthy TV shows, and
          exclusive Olympia Originals, all curated to bring the magic of cinema
          to your fingertips.
        </h1>
        <Link to="/login">
          <button className="bg-blue-700 p-3 rounded-sm w-72 mt-3 text-white hover:bg-purple-700 hover:text-neon-cyan transition duration-300">
            Sign in to join Olympia
          </button>
        </Link>
      </div>
      <div
        className="h-screen pt-44 pl-10"
        style={{
          backgroundImage: `linear-gradient(to right,rgba(0,0,0,7),rgba(0,0,0,0.1)),url(https://image.tmdb.org/t/p/w500${
            movie?.results ? movie?.results[0]?.poster_path : ""
          })`,
          backgroundRepeat: "no-repeat",
          backgroundSize: "640px 450px",
        }}
      >
        <h1 className="text-gray-300 text-6xl">
          {movie?.results ? movie?.results[0]?.title : ""}
        </h1>
        <h1 className="ml-3">New movie</h1>
      </div>
    </div>
  );
};

export default Welcome;
