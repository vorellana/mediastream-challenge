import { render, fireEvent } from '@testing-library/react'
import { MovieCard } from '../MovieCard'

test('renders movie card with movie details', () => {
  const movie = {
    id: 1,
    name: 'Star Wars',
    price: 20
  }
  const addToCart = jest.fn()

  const { getByText } = render(<MovieCard movie={movie} addToCart={addToCart} />)

  // Checks that the film details are rendered correctly
  expect(getByText('ID: 1')).toBeInTheDocument()
  expect(getByText('Name: Star Wars')).toBeInTheDocument()
  expect(getByText('Price: $20')).toBeInTheDocument()

  // Check that the "Add to cart" button is present.
  const addToCartButton = getByText('Add to cart')
  expect(addToCartButton).toBeInTheDocument()

  // Check that the addToCart function is called when the button is clicked.
  fireEvent.click(addToCartButton)
  expect(addToCart).toHaveBeenCalledTimes(1)
})
