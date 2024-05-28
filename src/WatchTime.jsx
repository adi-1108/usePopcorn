import React from "react";

const WatchTime = ({ watchedMovie }) => {
  const caluclateAverageRating = () => {
    if (watchedMovie.length === 0) return 0;
    const totalrating = watchedMovie.reduce(
      (acc, movie) => acc + movie.imdbRating,
      0
    );
    return (totalrating / watchedMovie.length).toFixed(2);
  };

  console.log(watchedMovie)
  return (
    <div className="flex flex-col gap-3 rounded-lg p-4 bg-gray-900 shadow-xl">
      <span className="font-bold text-white text-xl">Movies you watched</span>
      <div className="flex gap-4">
        <div className="text-white flex gap-2 p-2 bg-slate-700 rounded-lg shadow-xl">
          <span>#️⃣Movies</span>
          <span>{watchedMovie.length}</span>
        </div>
        <div className="text-white flex gap-2 p-2 bg-slate-700 rounded-lg shadow-xl">
          <spa>⭐</spa>
          <span>{}</span>
        </div>
        <div className="text-white flex gap-2 p-2 bg-slate-700 rounded-lg shadow-xl">
          <span>🌟</span>
          <span>0.00</span>
        </div>
        <div className="text-white flex gap-2 p-2 bg-slate-700 rounded-lg shadow-xl">
          <span>⌛</span>
          <span>0 min </span>
        </div>
      </div>
    </div>
  );
};

export default WatchTime;
