import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

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
    <h1>Loading...</h1>
  ) : (
    <div>
      <h1>{movie.title}</h1>
      <img src={movie.large_cover_image} alt={movie.title} />
    </div>
  );
}
