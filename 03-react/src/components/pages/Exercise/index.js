import './assets/styles.css'
import { useState } from 'react'
import { MovieList } from './MovieList'
import { Cart } from './Cart'

export default function Exercise01 () {
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
    },
    {
      id: 3,
      name: 'Fast and Furious',
      price: 10
    },
    {
      id: 4,
      name: 'The Lord of the Rings',
      price: 5
    }
  ]

  const discountRules = [
    {
      m: [3, 2],
      discount: 0.25
    },
    {
      m: [2, 4, 1],
      discount: 0.5
    },
    {
      m: [4, 2],
      discount: 0.1
    }
  ]

  const [cart, setCart] = useState([
    {
      id: 1,
      name: 'Star Wars',
      price: 20,
      quantity: 2
    }
  ])

  const addToCart = (movie) => {
    const found = cart.find(o => o.id === movie.id)

    if (found) {
      setCart(cart.map(o => o.id === movie.id ? { ...o, quantity: o.quantity + 1 } : o))
    } else {
      setCart([...cart, { ...movie, quantity: 1 }])
    }
  }

  const incrementQuantity = (movie) => {
    setCart(cart.map(o => o.id === movie.id ? { ...o, quantity: o.quantity + 1 } : o))
  }

  const decrementQuantity = (movie) => {
    const quantity = cart.find(o => o.id === movie.id).quantity
    if (quantity === 1) {
      setCart(cart.filter(o => o.id !== movie.id))
    } else {
      setCart(cart.map(o => o.id === movie.id ? { ...o, quantity: o.quantity - 1 } : o))
    }
  }

  const getTotal = () => {
    let total = 0
    cart.forEach(item => {
      total += item.price * item.quantity
    })

    // Apply discount rules
    discountRules.forEach(rule => {
      const { m, discount } = rule

      if (m.every(id => cart.find(o => o.id === id))) {
        let discountTotal = 0

        m.forEach(id => {
          const movie = cart.find(o => o.id === id)
          discountTotal += movie.price * movie.quantity
        })

        total -= discountTotal * discount
      }
    })

    return total
  }

  return (
    <section className="exercise01">
      <MovieList movies={movies} addToCart={addToCart} />
      <Cart cart={cart} decrementQuantity={decrementQuantity} incrementQuantity={incrementQuantity} getTotal={getTotal} />
    </section>
  )
}
