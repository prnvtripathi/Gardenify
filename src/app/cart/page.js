"use client"

import { useState } from 'react';
import Link from 'next/link';
import { AiOutlineShoppingCart } from 'react-icons/ai';

const CartPage = () => {
    const [cartItems, setCartItems] = useState([
        {
            id: 1,
            name: 'Plant 1',
            price: 10,
            image: '/images/plant1.png'
        },
        {
            id: 2,
            name: 'Plant 2',
            price: 15,
            image: '/images/plant2.png'
        },
        {
            id: 3,
            name: 'Plant 3',
            price: 20,
            image: '/images/plant3.png'
        }
    ]);

    const removeItemFromCart = (item) => {
        setCartItems((prevItems) =>
            prevItems.filter((prevItem) => prevItem.id !== item.id)
        );
        // Logic to remove the item from the cart
        // You can implement your own logic here
        console.log(`Removed ${item.name} from cart`);
    };

    const calculateTotalPrice = () => {
        return cartItems.reduce((total, item) => total + item.price, 0);
    };

    return (
        <div className='cart-page'>
            <h2>Your Cart <AiOutlineShoppingCart /></h2>
            {cartItems.length === 0 ? (
                <p>No items in your cart.</p>
            ) : (
                <>
                    <ul className="cart-items">
                        {cartItems.map((item) => (
                            <li key={item.id} className="cart-item">
                                <img src={item.image} alt={item.name} className="cart-item-image" />
                                <div className="cart-item-details">
                                    <h3>{item.name}</h3>
                                    <p>Price: ${item.price}</p>
                                </div>
                                <div className="cart-item-actions">
                                    <button onClick={() => removeItemFromCart(item)}>Remove</button>
                                </div>
                            </li>
                        ))}
                    </ul>
                    <div className="cart-total">
                        <h3>Total: ${calculateTotalPrice()}</h3>
                        <Link href="/payment" className='checkout-button'>
                            Checkout
                        </Link>
                    </div>
                </>
            )}
        </div>
    );
};

export default CartPage;
