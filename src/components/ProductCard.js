import Image from "next/image";

const ProductCard = ({ product, onAddToCart, onAddToWishlist }) => {
    const { name, price, image } = product;

    return (
        <div className="product-card">
            <Image src={image} alt={name} width={300} height={300} />
            <h3>{name}</h3>
            <p>Price: {price}₹</p>
            <div className="product-actions">
                <button className="add-to-cart" onClick={() => onAddToCart(product)}>
                    Add to Cart
                </button>
                <button className="add-to-wishlist" onClick={() => onAddToWishlist(product)}>
                    <span role="img" aria-label="Add to Wishlist">
                    ♡
                    </span>
                </button>
            </div>
        </div>
    );
};

export default ProductCard;
