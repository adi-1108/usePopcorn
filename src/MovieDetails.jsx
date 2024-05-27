import React, { useEffect, useState } from "react";
import StarRating from "./StarRating";
import Loader from "./Loader";
import WatchTime from "./WatchTime";
const KEY = "9c9d97ab";

const MovieDetails = ({
  selectedID,
  handleDeselectMovie,
  handleAddWatched,
}) => {
  const [movieDetails, setMoviedetails] = useState({});
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const fetchDetails = async () => {
      setIsLoading(true);
      const response = await fetch(
        `https://www.omdbapi.com/?apikey=${KEY}&i=${selectedID}`
      );

      const data = await response.json();
      console.log(data);
      setMoviedetails(data);
      setIsLoading(false);
    };
    fetchDetails();
  }, [selectedID]);

  const handleAdd = () => {
    const newWatchedMovie = {
      imdbRating: movieDetails.imdbRating,
      runtime: movieDetails.Runtime,
      runtime: runtime.split(" ").at(0),
    };
    handleAddWatched(newWatchedMovie);
  };
  return (
    <div className=" flex flex-col gap-4">
      {isLoading ? (
        <Loader />
      ) : (
        <>
          <div className="flex p-5 bg-gray-900 shadow-lg rounded-xl">
            <img
              src={movieDetails?.Poster}
              className="h-40 w-28 rounded-lg object-cover shadow-xl"
              alt={movieDetails?.Title || "Movie Poster"}
            />
            <div className="flex flex-col ml-4 gap-2">
              <span className="text-white font-bold">
                {movieDetails?.Title}
              </span>
              <span className="text-white">{movieDetails?.DVD}</span>
              <span className="text-white">{movieDetails?.Genre}</span>
              <span className="text-white">⌛{movieDetails?.Runtime}</span>
            </div>
          </div>

          <div className="p-5  flex flex-col items-center justify-center gap-4  bg-gray-900  rounded-xl shadow-xl">
            <StarRating maxRating={10} />
            <p className="text-white">{movieDetails.Plot}</p>
          </div>

          <div>
            <button
              onClick={() => handleDeselectMovie()}
              className="w-fit px-6 py-2 bg-blue-600 font-bold text-white rounded-lg shadow-xl"
            >
              Back
            </button>
            <button
              onClick={() => handleAdd()}
              className="w-fit px-6 py-2 bg-blue-600 font-bold text-white rounded-lg shadow-xl"
            >
              Add to Watchlist
            </button>
          </div>
        </>
      )}
    </div>
  );
};

export default MovieDetails;
