export interface Movie {
  imdbID: string;
  Title: string;
  Year: string;
  Poster: string;
  Type: string;
}

export interface MovieDetail extends Movie {
  Genre: string;
  Plot: string;
  Director: string;
  Actors: string;
  Runtime: string;
}