import { render, fireEvent } from '@testing-library/react'
import { Cart } from '../Cart'

test('renders cart with cart details and total', () => {
  const cart = [
    {
      id: 1,
      name: 'Star Wars',
      price: 20,
      quantity: 2
    }
  ]

  const incrementQuantity = jest.fn()
  const decrementQuantity = jest.fn()
  const getTotal = jest.fn().mockReturnValue(40) // Asume que el total es 40

  const { getByText } = render(<Cart cart={cart} incrementQuantity={incrementQuantity} decrementQuantity={decrementQuantity} getTotal={getTotal} />)

  // Check that the cart details are rendered correctly
  expect(getByText('ID: 1')).toBeInTheDocument()
  expect(getByText('Name: Star Wars')).toBeInTheDocument()
  expect(getByText('Price: $20')).toBeInTheDocument()
  expect(getByText('2')).toBeInTheDocument()

  // Check that the total of the cart is rendered correctly
  expect(getByText('Total: $40')).toBeInTheDocument()

  // Check that the increment and decrement buttons are present
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
