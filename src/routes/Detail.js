import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import FloatingButton from '../components/FloatingButton';
import Loading from '../components/Loading';

export default function Detail() {
  const [movie, setMovie] = useState();
  const [isLoad, setIsLoad] = useState(true);
  const { id } = useParams();
  const getMovie = async () => {
    const response = await (
      await fetch(`https://yts.mx/api/v2/movie_details.json?movie_id=${id}`)
    ).json();
    setMovie(response.data.movie);
    setIsLoad(false);
  };
  useEffect(() => {
    getMovie();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return isLoad ? (
    <Loading />
  ) : (
    <div className="detail-container">
      <FloatingButton />
      <img src={movie.large_cover_image} alt={movie.title} />
      <div className="contents">
        <h1>
          {movie.title}, {movie.year}
        </h1>
        <ul className="genre">
          {movie.genres.map(genre => (
            <li key={genre}>{genre}</li>
          ))}
        </ul>
        <p className="rating">⭐{movie.rating}</p>
        {movie.runtime === 0 ? null : (
          <p className="runtime">⌛{movie.runtime}minutes</p>
        )}
        <p className="summary">{movie.description_full}</p>
      </div>
    </div>
  );
}
