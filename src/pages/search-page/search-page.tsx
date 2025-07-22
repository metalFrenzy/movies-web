/* eslint-disable @typescript-eslint/no-unused-vars */
import axios from "axios";
import { useEffect, useState } from "react";
import { useDebounce } from "../../hooks/use-debounce";
import { Movie } from "../../types/movies";
import SearchInput from "../../components/search-input/search-input";
import "./search-page.scss"
import { Link } from "react-router-dom";
import { useSearch } from "../../context/search-page.context";

const API_URL = "https://www.omdbapi.com/";

export default function SearchPage() {
  const { query, setQuery, movies, setMovies } = useSearch();
  const debouncedQuery = useDebounce(query, 500);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchMovies = async () => {
      if (!debouncedQuery) return;

      try {
        const response = await axios.get(API_URL, {
          params: {
            s: debouncedQuery,
            apiKey: import.meta.env.VITE_OMDB_API_KEY,
          },
        });

        if (response.data.Response === "True") {
          setMovies(response.data.Search);
          setError("");
        } else {
          setMovies([]);
          setError(response.data.Error || "Something went wrong");
        }
      } catch (err) {
        setError("Failed to fetch data. Please try again.");
        setMovies([]);
      }
    };

    fetchMovies();
  }, [debouncedQuery, setMovies]);

  return (
    <div className="search-page">
      <h1>🎬 Frenzy Movies </h1>
      <SearchInput value={query} onChange={(e) => setQuery(e.target.value)} />
      {error && <p style={{ color: "red" }}>{error}</p>}
      <div className="movie-grid">
        {movies.map((movie) => (
          <Link to={`/movie/${movie.imdbID}`} key={movie.imdbID} className="movie-card">
            <img
              src={movie.Poster !== "N/A" ? movie.Poster : "/placeholder.jpg"}
              alt={movie.Title}
            />
            <h3>{movie.Title}</h3>
            <p>{movie.Year}</p>
          </Link>
        ))}
      </div>
    </div>
  );
}
