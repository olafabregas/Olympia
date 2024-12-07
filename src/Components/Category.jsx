import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../redux/hooks";
import { getMovies } from "../redux/movieSlice";

const Category = (props) => {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const movie = useAppSelector((state) => state.movie.data);

  const detailsNavigate = (data) => {
    navigate("/details", {
      state: { data },
    });
  };

  useEffect(() => {
    dispatch(getMovies());
  }, [dispatch]);

  return (
    <div className="category-container bg-gray-900 p-6 rounded-lg">
      {/* Header */}
      <div className="flex items-center mb-6">
        <h1 className="text-blue-500 font-bold text-2xl">Olympia</h1>
        <h2 className="text-white font-medium text-xl ml-4">
          {props.category} Movies
        </h2>
      </div>

      {/* Movie List */}
      <div className="flex gap-6 overflow-x-auto no-scrollbar">
        {movie?.results?.length > 0 ? (
          movie.results.map((data) => (
            <div
              key={data.id}
              className="movie-card cursor-pointer flex-shrink-0 w-56"
              onClick={() => detailsNavigate(data)}
            >
              <img
                src={
                  data?.poster_path
                    ? `https://image.tmdb.org/t/p/w500${data.poster_path}`
                    : "https://via.placeholder.com/500x750?text=No+Image"
                }
                alt={`${data.title || "Movie"} poster`}
                className="w-full h-72 rounded-lg object-cover hover:opacity-90"
              />
              <p className="text-white mt-2 text-center font-medium">
                {data.title || "Untitled"}
              </p>
            </div>
          ))
        ) : (
          <p className="text-gray-400 text-center">No movies available.</p>
        )}
      </div>
    </div>
  );
};

export default Category;
