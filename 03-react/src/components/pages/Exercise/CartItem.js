import PropTypes from 'prop-types'

export function CartItem ({ item, decrementQuantity, incrementQuantity }) {
  return (
    <li className="movies__cart-card">
      <ul>
        <li>ID: {item.id}</li>
        <li>Name: {item.name}</li>
        <li>Price: ${item.price}</li>
      </ul>
      <div className="movies__cart-card-quantity">
        <button onClick={() => decrementQuantity(item)}>-</button>
        <span>{item.quantity}</span>
        <button onClick={() => incrementQuantity(item)}>+</button>
      </div>
    </li>
  )
}

CartItem.propTypes = {
  item: PropTypes.shape({
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    quantity: PropTypes.number.isRequired
  }).isRequired,
  decrementQuantity: PropTypes.func.isRequired,
  incrementQuantity: PropTypes.func.isRequired
}
