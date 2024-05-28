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
  const [watched, setWatched] = useState(() => {
    const storedValue = localStorage.getItem("watched");
    return JSON.parse(storedValue);
  });

  const handleSelectedMovie = (id) => {
    setSelectedID(id);
  };

  const handleDeselectMovie = () => {
    setSelectedID(null);
  };

  const clearWatchList = () => {
    setWatched([]);
  };

  const handleAddWatched = (movie) => {
    setWatched((_prev) => [..._prev, movie]);
  };

  useEffect(() => {
    if (typeof localStorage !== "undefined")
      localStorage.setItem("watched", JSON.stringify(watched));
  }, [watched]);

  return (
    <div className="p-3 bg-slate-900 w-screen h-screen overflow-hidden">
      <div>
        {/* Nav Bar */}
        <NavBar>
          <h2 className="font-semibold text-xl text-white">🍿usePopcorn</h2>

          {/* SearchBar */}
          <Searchbar query={query} setQuery={setQuery} />

          <label className="text-white" htmlFor="">
            Results found {movies.length}
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
            <WatchTime clearWatchList={clearWatchList} watchedMovie={watched} />
          )}
        </Box>
      </div>
    </div>
  );
};

export default App;
