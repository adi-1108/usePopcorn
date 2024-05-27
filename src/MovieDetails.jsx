import React, { useEffect, useState } from "react";
import StarRating from "./StarRating";
const KEY = "9c9d97ab";

const MovieDetails = ({ selectedID }) => {
  const [movieDetails, setMoviedetails] = useState({});
  useEffect(() => {
    const fetchDetails = async () => {
      const response = await fetch(
        `https://www.omdbapi.com/?apikey=${KEY}&i=${selectedID}`
      );

      const data = await response.json();
      console.log(data);
      setMoviedetails(data);
    };
    fetchDetails();
  }, [selectedID]);

  return (
    <div className="flex-col items-center justify-center">
      <div className="flex p-5 bg-gray-900 shadow-lg rounded-xl">
        <img
          src={movieDetails?.Poster}
          className="h-40 w-28 rounded-lg object-cover shadow-xl"
          alt={movieDetails?.Title || "Movie Poster"}
        />
        <div className="flex flex-col ml-4 gap-2">
          <span className="text-white font-bold">{movieDetails?.Title}</span>
          <span className="text-white">{movieDetails?.DVD}</span>
          <span className="text-white">{movieDetails?.Genre}</span>
          <span className="text-white">⌛{movieDetails?.Runtime}</span>
        </div>
      </div>

      <StarRating maxRating={10} /> 
    </div>
  );
};

export default MovieDetails;
