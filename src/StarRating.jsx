import React, { useState } from "react";

const StarRating = ({ maxRating = 5 }) => {
  const [rating, setRating] = useState(0);
  const [tempRating, setTempRating] = useState(0);
  var full = false;
  return (
    <div className="flex gap-4 p-6 bg-slate-600 w-fit rounded-lg">
      <div className="flex gap-2">
        {Array.from({ length: 5 }, (_, i) => {
          return (
            <span className="" onMouseEnter={() => setTempRating(i+1)} onMouseLeave={() => setTempRating(0)}>
              <svg
                key={i}
                className="w-6 h-6 text-yellow-500"
                fill={tempRating ? tempRating > i ? "currentColor" : "none" : rating > i ? "currentColor" : "none"}
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                viewBox="0 0 24 24"
                onClick={() => setRating(i + 1)}
              >
                <path d="M12 2 L15.09 8.26 L22 9.27 L17 14.14 L18.18 21.02 L12 17.77 L5.82 21.02 L7 14.14 L2 9.27 L8.91 8.26 z"></path>
              </svg>
            </span>
          );
        })}
      </div>
      <p className="text-yellow-500">{rating || ""}</p>
    </div>
  );
};

export default StarRating;
