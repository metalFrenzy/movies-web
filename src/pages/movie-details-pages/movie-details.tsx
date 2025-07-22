import { useNavigate, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { MovieDetail } from "../../types/movies";
import MovieDetails from "../../components/movie-details-card/movie-details-card";
import axios from "axios";

const API_URL = "https://www.omdbapi.com/";



export default function MovieDetailsPage() {
    const { id } = useParams();
    const navigate = useNavigate();
    const [movie, setMovie] = useState<MovieDetail | null>(null);
    const [error, setError] = useState("");

    useEffect(() => {
        const fetchMovie = async () => {
            try {
                const response = await axios.get(API_URL, {
                    params: {
                        i: id,
                        apiKey: import.meta.env.VITE_OMDB_API_KEY,
                    },
                });

                if (response.data.Response === "True") {
                    setMovie(response.data);
                } else {
                    setError(response.data.Error);
                }
            } catch {
                setError("Something went wrong. Please try again.");
            }
        };

        fetchMovie();
    }, [id]);

    if (error) return <p>{error}</p>;
    if (!movie) return <p>Loading...</p>;

    return <MovieDetails movie={movie} onBack={() => navigate(-1)} />;
}
