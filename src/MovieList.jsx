import React, { useEffect, useState } from "react";
import MovieCard from "./MovieCard";

const KEY = "9c9d97ab";
const MovieList = ({ query }) => {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  useEffect(() => {
    const fetchMovies = async () => {
      try {
        setLoading(true);
        setError('');
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

      if(query.lenght < 3)
        {
            setMovies([]);
            setError("");
            return
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

      {loading && (
        <div class="flex h-screen justify-center">
          <p className="text-white">Loading....</p>
        </div>
      )}
      {!loading &&
        !error &&
        movies?.map((movie) => (
          <MovieCard movieObj={movie} key={movie.imdbID} />
        ))}
      {error && <p className="text-white flex justify-center items-center">💀{error}</p>}
    </div>
  );
};

export default MovieList;
