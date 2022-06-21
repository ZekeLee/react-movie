import { useEffect, useState } from 'react';
import Movie from '../components/Movie';

export default function Home() {
  const [isLoad, setIsLoad] = useState(true);
  const [movies, setMovies] = useState([]);
  const getMovies = async () => {
    const response = await (
      await fetch(
        'https://yts.mx/api/v2/list_movies.json?minimum_rating=9&sort_by=year',
      )
    ).json();
    setMovies(response.data.movies);
    setIsLoad(false);
  };
  useEffect(() => {
    getMovies();
  }, []);
  console.log(movies);
  return (
    <div>
      {isLoad ? (
        <h1>Loading...</h1>
      ) : (
        <ul>
          {movies.map(movie => (
            <Movie
              key={movie.id}
              movieId={movie.id}
              coverImg={movie.medium_cover_image}
              movieTitle={movie.title}
              summary={movie.summary}
              genres={movie.genres}
            />
          ))}
        </ul>
      )}
    </div>
  );
}
