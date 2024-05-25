import React from "react";

const MovieCard = ({movieObj}) => {
  
  return (
    <div
      className="my-2 flex items-center gap-6 px-4 py-2 transition-all duration-200 ease-in-out hover:cursor-pointer hover:rounded-xl hover:bg-gray-700 hover:ring-1 hover:ring-gray-600 "
    >
      <img
        src={movieObj.Poster}
        className="h-27 w-20 rounded-lg object-cover shadow-xl"
      />
      <div className="flex flex-col gap-4">
        <p className="text-2xl font-bold text-white">{movieObj.Title}</p>
        <p className="font-mono text-lg font-semibold text-white">
          📅 {movieObj.Year}
        </p>
      </div>
    </div>
  );
};

export default MovieCard;
