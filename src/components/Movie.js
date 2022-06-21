import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

function Movie({ movieId, coverImg, movieTitle, summary, genres }) {
  return (
    <li>
      <Link to={`/movie/${movieId}`}>
        <img src={coverImg} alt={movieTitle} />
        <h2>{movieTitle}</h2>
        <p>{summary}</p>
        <ul>
          {genres.map(genre => (
            <li key={genre}>{genre}</li>
          ))}
        </ul>
      </Link>
    </li>
  );
}
Movie.propTypes = {
  movieId: PropTypes.number.isRequired,
  coverImg: PropTypes.string.isRequired,
  movieTitle: PropTypes.string.isRequired,
  summary: PropTypes.string.isRequired,
  genres: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default Movie;
