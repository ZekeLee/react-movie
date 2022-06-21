import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

function Movie({
  movieId,
  coverImg,
  movieTitle,
  year,
  summary,
  rating,
  genres,
}) {
  return (
    <li>
      <Link to={`/movie/${movieId}`}>
        <img src={coverImg} alt={movieTitle} />
        <div className="contents">
          <h2>
            {movieTitle}, {year}
          </h2>
          <ul className="genre">
            {genres.map(genre => (
              <li key={genre}>{genre}</li>
            ))}
          </ul>
          <p className="rating">⭐{rating}</p>
          <p className="summary">{summary}</p>
        </div>
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
