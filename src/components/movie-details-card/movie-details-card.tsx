import { MovieDetail } from "../../types/movies";
import "./movie-details-card.scss";

interface Props {
  movie: MovieDetail;
  onBack: () => void;
}

const MovieDetails: React.FC<Props> = ({ movie, onBack }) => {
  return (
    <div className="details-page">
      <button className="back-btn" onClick={onBack}>← Back</button>

      <div className="details-content">
        <img src={movie.Poster} alt={movie.Title} />
        <div className="info">
          <h1>{movie.Title}</h1>
          <p><strong>Year:</strong> {movie.Year}</p>
          <p><strong>Genre:</strong> {movie.Genre}</p>
          <p><strong>Director:</strong> {movie.Director}</p>
          <p><strong>Actors:</strong> {movie.Actors}</p>
          <p><strong>Runtime:</strong> {movie.Runtime}</p>
          <p><strong>Plot:</strong> {movie.Plot}</p>
        </div>
      </div>
    </div>
  );
};

export default MovieDetails;