import PropTypes from 'prop-types'

export function MovieCard ({ movie, addToCart }) {
  return (
    <li className="movies__list-card" key={movie.id}>
      <ul>
        <li>ID: {movie.id}</li>
        <li>Name: {movie.name}</li>
        <li>Price: ${movie.price}</li>
      </ul>
      <button onClick={() => addToCart(movie)}>Add to cart</button>
    </li>
  )
}

MovieCard.propTypes = {
  movie: PropTypes.shape({
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired
  }).isRequired,
  addToCart: PropTypes.func.isRequired
}
