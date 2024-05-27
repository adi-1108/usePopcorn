import React from "react";

const WatchTime = () => {
  return (
    <div className="flex flex-col gap-3 rounded-lg p-4 bg-gray-900 shadow-xl">
      <span className="font-bold text-white text-xl">Movies you watched</span>
      <div className="flex gap-4">
        <div className="text-white flex gap-2 p-2 bg-slate-700 rounded-lg shadow-xl">
          <span>#️⃣Movies</span>
          <span>0 Movies</span>
        </div>
        <div className="text-white flex gap-2 p-2 bg-slate-700 rounded-lg shadow-xl">
          <spa>⭐</spa>
          <span>0.00</span>
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
