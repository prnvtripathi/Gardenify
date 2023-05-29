"use client"

import { useState } from 'react';

const WishlistPage = () => {
    const [wishlistItems, setWishlistItems] = useState([
        {
            id: 1,
            name: 'Plant 1',
            price: 10,
            image: '/path/to/plant1.jpg'
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
    ]);

    const moveItemToCart = (item) => {
        setWishlistItems((prevItems) =>
            prevItems.filter((prevItem) => prevItem.id !== item.id)
        );
        // Logic to move the item to the cart
        // You can implement your own logic here
        console.log(`Moved ${item.name} to cart`);
    };

    const removeItemFromWishlist = (item) => {
        setWishlistItems((prevItems) =>
            prevItems.filter((prevItem) => prevItem.id !== item.id)
        );
        // Logic to remove the item from the wishlist
        // You can implement your own logic here
        console.log(`Removed ${item.name} from wishlist`);
    };

    return (
        <div>
            <h2>Your Wishlist</h2>
            {wishlistItems.length === 0 ? (
                <p>No items in your wishlist.</p>
            ) : (
                <ul className="wishlist-items">
                    {wishlistItems.map((item) => (
                        <li key={item.id} className="wishlist-item">
                            <img src={item.image} alt={item.name} className="wishlist-item-image" />
                            <div className="wishlist-item-details">
                                <h3>{item.name}</h3>
                                <p>Price: ${item.price}</p>
                            </div>
                            <div className="wishlist-item-actions">
                                <button onClick={() => moveItemToCart(item)}>Move to Cart</button>
                                <button onClick={() => removeItemFromWishlist(item)}>Remove</button>
                            </div>
                        </li>
                    ))}
                </ul>
            )}
        </div>
    );
};

export default WishlistPage;
