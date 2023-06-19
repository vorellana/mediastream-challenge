import { render, fireEvent } from '@testing-library/react'
import { MovieList } from '../MovieList'

test('renders movie list with movie details', () => {
  const movies = [
    {
      id: 1,
      name: 'Star Wars',
      price: 20
    },
    {
      id: 2,
      name: 'Minions',
      price: 25
    }
  ]
  const addToCart = jest.fn()

  const { getByText } = render(<MovieList movies={movies} addToCart={addToCart} />)

  // Checks that film details are rendered correctly
  expect(getByText('ID: 1')).toBeInTheDocument()
  expect(getByText('Name: Star Wars')).toBeInTheDocument()
  expect(getByText('Price: $20')).toBeInTheDocument()

  expect(getByText('ID: 2')).toBeInTheDocument()
  expect(getByText('Name: Minions')).toBeInTheDocument()
  expect(getByText('Price: $25')).toBeInTheDocument()

  // Check that the "Add to cart" button is present.
  const addToCartButtons = document.querySelectorAll('.movies__list-card button')

  expect(addToCartButtons.length).toBe(2)

  // Checks that the addToCart function is called when the first movie button is clicked
  fireEvent.click(addToCartButtons[0])
  expect(addToCart).toHaveBeenCalledTimes(1)
  expect(addToCart).toHaveBeenCalledWith(movies[0])

  // Check that the addToCart function is called when the second movie button is clicked.
  fireEvent.click(addToCartButtons[1])
  expect(addToCart).toHaveBeenCalledTimes(2)
  expect(addToCart).toHaveBeenCalledWith(movies[1])
})
