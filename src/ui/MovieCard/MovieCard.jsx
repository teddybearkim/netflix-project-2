import React from "react";
import Genre from "../Genre/Genre";
import "./MovieCard.style.css";
import { useNavigate } from "react-router-dom";
const MovieCard = ({ movie }) => {
  const navigate = useNavigate();

  const moveToDetailPage = () => {
    navigate(`/movies/${movie.id}`);
    window.scrollTo(0, 0);
  };
  const posterPath = movie?.poster_path;
  const imageUrl = `https://media.themoviedb.org/t/p/w220_and_h330_bestv2${posterPath}`;

  return (
    <div style={{ background: `url(${imageUrl})` }} className="movie-card">
      <div className="overlay" onClick={moveToDetailPage}>
        <h7>{movie.title}</h7>
        <Genre movie={movie} />
        <div className="movie-detail-Info">
          <div>Grade : {movie?.vote_average ? movie.vote_average.toFixed(1) : ''}점</div>
          <div>Limit : {movie?.adult ? "over 18" : "under 18"}</div>
        </div>
      </div>
    </div>
  );
};

export default MovieCard;
