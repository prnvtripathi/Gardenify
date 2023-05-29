"use client"

import './globals.css'
import { useState } from "react"
import Carousel from "@/components/Carousel"
import ProductCard from "@/components/ProductCard"

const Home = () => {
  const [cartItems, setCartItems] = useState([]);
  const [wishlistItems, setWishlistItems] = useState([]);

  const products = [
    {
      id: 1,
      name: 'Plant 1',
      price: 100,
      image: '/images/plant1.png'
    },
    {
      id: 2,
      name: 'Plant 2',
      price: 120,
      image: '/images/plant2.png'
    },
    {
      id: 3,
      name: 'Plant 3',
      price: 200,
      image: '/images/plant3.png'
    },
    {
      id: 4,
      name: 'Plant 1',
      price: 100,
      image: '/images/plant1.png'
    },
    {
      id: 5,
      name: 'Plant 2',
      price: 120,
      image: '/images/plant2.png'
    },
    {
      id: 6,
      name: 'Plant 3',
      price: 200,
      image: '/images/plant3.png'
    },
    {
      id: 7,
      name: 'Plant 1',
      price: 100,
      image: '/images/plant1.png'
    },
    {
      id: 8,
      name: 'Plant 2',
      price: 120,
      image: '/images/plant2.png'
    },
    {
      id: 9,
      name: 'Plant 3',
      price: 200,
      image: '/images/plant3.png'
    }
  ];

  const addToCart = (product) => {
    setCartItems((prevCartItems) => [...prevCartItems, product]);
  };

  const addToWishlist = (product) => {
    setWishlistItems((prevWishlistItems) => [...prevWishlistItems, product]);
  };

  return (
    <div>
      <Carousel />
      <section className="products-section">
        <h2>Products on Sale</h2>
        <div className="product-list">
          {products.map((product) => (
            <ProductCard
              key={product.id}
              product={product}
              onAddToCart={addToCart}
              onAddToWishlist={addToWishlist}
            />
          ))}
        </div>
      </section>
    </div>
  )
}

export default Home