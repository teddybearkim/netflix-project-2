import React from 'react'
import Genre from '../Genre/Genre';
import "./MovieCard.style.css";
import {useNavigate} from 'react-router-dom'
const MovieCard = ({movie}) => {
    const navigate = useNavigate();


    const moveToDetailPage = () =>{
      navigate(`/movies/${movie.id}`);
      window.scrollTo(0,0); 
    }
    const posterPath = movie?.poster_path;
    const imageUrl = `https://media.themoviedb.org/t/p/w220_and_h330_bestv2${posterPath}`;

  
    return (
    <div style={{background:`url(${imageUrl})`}} className='movie-card'>
      <div className='overlay' onClick={moveToDetailPage}>
        <h4>{movie.title}</h4>
        <Genre movie = {movie}/>
        <div className='movie-detail-Info'>
          <div>영화 평점 : {movie?.vote_average}점</div>
          <div>누적관객 수 : {movie?.popularity}명</div>
          <div>연령제한 : {movie?.adult?'over 18':'under 18'}</div>
        </div>
      </div>
    </div>
    
  )
}

export default MovieCard