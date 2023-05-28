"use client"

import { useState } from 'react';
import { AiOutlineShoppingCart } from 'react-icons/ai';
import Link from 'next/link';

const Navbar = () => {
    const [cartItems, setCartItems] = useState([]);

    const handleLogin = () => {
        // Implement your login functionality here
    };

    const cartCount = cartItems.length;

    return (
        <nav className="navbar">
            <div className="navbar-brand">
                <span className="brand-name"><Link href='/'>Gardenify</Link></span>
            </div>
            <ul className="navbar-menu">
                <Link href='/explore'><li className="menu-item">Explore</li></Link>
                <Link href='/about'><li className="menu-item">About</li></Link>
                <Link href='/wishlist'><li className="menu-item">Wishlist</li></Link>
            </ul>
            <div className="cart-section">
                <div>
                    <span className="cart-count">{cartCount}</span>
                    <AiOutlineShoppingCart size={20}/>
                </div>
                <div>
                    <Link href='/login' className='login-button' onClick={handleLogin}>Login</Link>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
