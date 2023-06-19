import { render, fireEvent } from '@testing-library/react'
import { CartItem } from '../CartItem'

test('renders cart item with movie details and quantity', () => {
  const cartItem = {
    id: 1,
    name: 'Star Wars',
    price: 20,
    quantity: 2
  }

  const incrementQuantity = jest.fn()
  const decrementQuantity = jest.fn()

  const { getByText } = render(<CartItem item={cartItem} incrementQuantity={incrementQuantity} decrementQuantity={decrementQuantity} />)

  // Check that the cart detail are rendered correctly.
  expect(getByText('ID: 1')).toBeInTheDocument()
  expect(getByText('Name: Star Wars')).toBeInTheDocument()
  expect(getByText('Price: $20')).toBeInTheDocument()
  expect(getByText('2')).toBeInTheDocument() // Quantity

  // Check that the "+" and "-" buttons are present
  const incrementButton = getByText('+')
  const decrementButton = getByText('-')

  expect(incrementButton).toBeInTheDocument()
  expect(decrementButton).toBeInTheDocument()

  // Checks that the incrementQuantity and decrementQuantity functions are called when the buttons are clicked
  fireEvent.click(incrementButton)
  expect(incrementQuantity).toHaveBeenCalledTimes(1)

  fireEvent.click(decrementButton)
  expect(decrementQuantity).toHaveBeenCalledTimes(1)
})
