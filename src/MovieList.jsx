import React, { useEffect, useState } from "react";
import MovieCard from "./MovieCard";
import Loader from "./Loader";

const KEY = "9c9d97ab";
const MovieList = ({ query, handleSelectedMovie, movies, setMovies }) => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchMovies = async () => {
      try {
        setLoading(true);
        setError("");
        const response = await fetch(
          `https://www.omdbapi.com/?apikey=${KEY}&s=${query}`
        );

        if (!response.ok) {
          throw new Error("Something went wrong!");
        }
        const data = await response.json();
        if (data.Response === "False") {
          throw new Error("Movie Not Found");
        }
        setMovies(data.Search);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }

      if (query.lenght < 3) {
        setMovies([]);
        setError("");
        return;
      }
    };
    fetchMovies();
  }, [query]);

  return (
    <div>
      {/* {loading ? (
        
      ) : (
        movies.map((movie) => <MovieCard movieObj={movie} key={movie.imdbID} />)
      )} */}

      {loading && <Loader />}
      {!loading &&
        !error &&
        movies?.map((movie) => (
          <MovieCard
            movieObj={movie}
            handleSelectedMovie={handleSelectedMovie}
            key={movie.imdbID}
          />
        ))}
      {error && (
        <p className="text-white flex justify-center items-center">💀{error}</p>
      )}
    </div>
  );
};

export default MovieList;
