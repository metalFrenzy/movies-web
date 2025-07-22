import { createContext, useContext, useState, ReactNode } from "react";
import { Movie } from "../types/movies";

type SearchContextType = {
  query: string;
  setQuery: (q: string) => void;
  movies: Movie[];
  setMovies: (m: Movie[]) => void;
};

const SearchContext = createContext<SearchContextType | undefined>(undefined);

export function SearchProvider({ children }: { children: ReactNode }) {
  const [query, setQuery] = useState("");
  const [movies, setMovies] = useState<Movie[]>([]);

  return (
    <SearchContext.Provider value={{ query, setQuery, movies, setMovies }}>
      {children}
    </SearchContext.Provider>
  );
}

export function useSearch() {
  const context = useContext(SearchContext);
  if (!context) throw new Error("useSearch must be used within SearchProvider");
  return context;
}
