import React, { useState } from "react";

const Searchbar = () => {
  const [query, setQuery] = useState("");
  return (
    <input
      className="rounded-md px-3 py-2 focus:outline-none flex-[0.5] bg-blue-800 outline-none text-white hover:bg-blue-900 transition duration-300 ease-in-out"
      type="text"
      value={query}
      onChange={(e) => setQuery(e.target.value)}
      placeholder="Search for movies"
    />
  );
};

export default Searchbar;
