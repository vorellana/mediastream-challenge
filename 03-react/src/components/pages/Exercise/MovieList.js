import PropTypes from 'prop-types'
import { MovieCard } from './MovieCard'

export function MovieList ({ movies, addToCart }) {
  return (
    <div className="movies__list">
      <ul>
        {movies.map(movie => (
          <MovieCard key={movie.id} movie={movie} addToCart={addToCart} />
        ))}
      </ul>
    </div>
  )
}

MovieList.propTypes = {
  movies: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      name: PropTypes.string.isRequired,
      price: PropTypes.number.isRequired
    })
  ).isRequired,
  addToCart: PropTypes.func.isRequired
}
