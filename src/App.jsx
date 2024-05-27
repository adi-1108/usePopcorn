import React, { useEffect, useState } from "react";
import NavBar from "./NavBar";
import StarRating from "./StarRating";
import Box from "./Box";
import MovieList from "./MovieList";
import Searchbar from "./Searchbar";
import MovieDetails from "./MovieDetails";
import WatchTime from "./WatchTime";

const App = () => {
  const [query, setQuery] = useState("");
  const [selectedID, setSelectedID] = useState(null);
  const [movies, setMovies] = useState([]);
  const [watched, setWatched] = useState([]);

  const handleSelectedMovie = (id) => {
    setSelectedID(id);
  };

  const handleDeselectMovie = () => {
    setSelectedID(null);
  };

  const handleAddWatched = (movie) => {
    setWatched((movie) => [...watched, movie]);
  };

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
          <MovieList
            movies={movies}
            setMovies={setMovies}
            handleSelectedMovie={handleSelectedMovie}
            query={query}
          />
        </Box>
        <Box>
          {selectedID ? (
            <MovieDetails
              handleDeselectMovie={handleDeselectMovie}
              selectedID={selectedID}
              handleAddWatched={handleAddWatched}
            />
          ) : (
            <WatchTime />
          )}
        </Box>
      </div>
    </div>
  );
};

export default App;
