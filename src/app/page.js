"use client"

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
      price: 10,
      image: '/assets/plant1.png'
    },
    {
      id: 2,
      name: 'Plant 2',
      price: 15,
      image: '/path/to/plant2.jpg'
    },
    {
      id: 3,
      name: 'Plant 3',
      price: 20,
      image: '/path/to/plant3.jpg'
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