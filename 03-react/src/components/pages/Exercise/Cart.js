import PropTypes from 'prop-types'
import { CartItem } from './CartItem'

export function Cart ({ cart, decrementQuantity, incrementQuantity, getTotal }) {
  return (
    <div className="movies__cart">
      <ul>
        {cart.map(item => (
          <CartItem key={item.id} item={item} decrementQuantity={decrementQuantity} incrementQuantity={incrementQuantity} />
        ))}
      </ul>
      <div className="movies__cart-total">
        <p>Total: ${getTotal()}</p>
      </div>
    </div>
  )
}

Cart.propTypes = {
  cart: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      name: PropTypes.string.isRequired,
      price: PropTypes.number.isRequired,
      quantity: PropTypes.number.isRequired
    })
  ).isRequired,
  decrementQuantity: PropTypes.func.isRequired,
  incrementQuantity: PropTypes.func.isRequired,
  getTotal: PropTypes.func.isRequired
}
