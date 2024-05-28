import React from "react";
import MovieCard from "./MovieCard";

const WatchTime = ({ watchedMovie, clearWatchList }) => {
  const rating = (
    watchedMovie.reduce((acc, movie) => acc + movie.imdbRating, 0) /
    watchedMovie.length
  ).toFixed(2);
  const runTime = watchedMovie.reduce(
    (_prev, movie) => _prev + movie.runtime,
    0
  );
  return (
    <div className="flex flex-col ">
      <div className="flex justify-between w-full items-center gap-5 rounded-lg p-4 bg-gray-900 shadow-xl">
        <div>
          <div className="flex flex-col gap-3 ">
            <span className="font-bold text-white text-xl">
              Movies you watched
            </span>

            <div className="flex gap-4">
              <div className="text-white flex gap-2 p-2 bg-slate-700 rounded-lg shadow-xl">
                <span>#️⃣Movies</span>
                <span>{watchedMovie.length}</span>
              </div>
              <div className="text-white flex gap-2 p-2 bg-slate-700 rounded-lg shadow-xl">
                <span>⭐</span>
                <span>{rating}</span>
              </div>
              <div className="text-white flex gap-2 p-2 bg-slate-700 rounded-lg shadow-xl">
                <span>🌟</span>
                <span>0.00</span>
              </div>
              <div className="text-white flex gap-2 p-2 bg-slate-700 rounded-lg shadow-xl">
                <span>⌛</span>
                <span>{runTime} min </span>
              </div>
            </div>
          </div>
        </div>

        {watchedMovie.length > 0 && (
          <div className="flex gap-2 items-center justify-center">
            <button
              onClick={() => clearWatchList()}
              className="px-4 py-2 bg-red-600 rounded-xl shadow-xl text-white font-bold"
            >
              Clear
            </button>
          </div>
        )}
      </div>

      <div>
        {watchedMovie?.map((movie) => (
          <MovieCard movieObj={movie} key={movie.imdbID} />
        ))}
      </div>
    </div>
  );
};

export default WatchTime;
