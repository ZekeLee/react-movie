import { useEffect, useState } from 'react';
import Loading from '../components/Loading';
import Movie from '../components/Movie';

export default function Home() {
  const [isLoad, setIsLoad] = useState(true);
  const [movies, setMovies] = useState([]);
  const getMovies = async () => {
    const response = await (
      await fetch(
        'https://yts.mx/api/v2/list_movies.json?minimum_rating=9&sort_by=rating',
      )
    ).json();
    setMovies(response.data.movies);
    setIsLoad(false);
  };
  useEffect(() => {
    getMovies();
  }, []);
  return (
    <>
      {isLoad ? (
        <Loading />
      ) : (
        <ul className="movie-list">
          {movies.map(movie => (
            <Movie
              key={movie.id}
              movieId={movie.id}
              coverImg={movie.medium_cover_image}
              movieTitle={movie.title}
              year={movie.year}
              summary={movie.summary}
              rating={movie.rating}
              genres={movie.genres}
            />
          ))}
        </ul>
      )}
    </>
  );
}
