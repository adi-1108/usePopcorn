import React, { useEffect, useState } from "react";
import NavBar from "./NavBar";
import StarRating from "./StarRating";
import Box from "./Box";
import MovieList from "./MovieList";
import Searchbar from "./Searchbar";



const App = () => {
  const [query, setQuery] = useState("");
  
  return (
    <div className="p-3 bg-slate-900 w-screen h-screen overflow-hidden">
      <div>
        {/* Nav Bar */}
        <NavBar>
          <h2 className="font-semibold text-xl text-white">🍿usePopcorn</h2>

          {/* SearchBar */}
          <Searchbar query={query} setQuery={setQuery} />

          <label className="text-white" htmlFor="">
            Results found
          </label>
        </NavBar>
      </div>

      <div className="flex justify-center items-center gap-4 mt-2">
        <Box>
          <MovieList query={query} />
        </Box>
        <Box>
          
        </Box>
      </div>
    </div>
  );
};

export default App;
