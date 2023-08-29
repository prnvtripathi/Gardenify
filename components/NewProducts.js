import { styled } from "styled-components"
import Center from "./Center"
import Link from "next/link"
import { MdOutlineShoppingCart } from "react-icons/md"
import { CartContext } from "./CartContext"
import { useContext } from "react"
import { Poppins } from "next/font/google"

const poppins = Poppins({
    subsets: ['latin'],
    weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
})

const Heading = styled.h2`
    text-align: center;
    font-size: 2rem;
    margin: 2rem 0;
`

const ProductsGrid = styled.div`
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 1rem;
    margin: 2rem 0;
`
const ProductBox = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;

    border-radius: 0.5rem;
    outline: 1px solid #242424;
    padding: 1rem;
    color: #272829;
    box-shadow: 12px 12px 12px #24242450;
    transition: all 0.2s ease-in-out;

    &:hover {
        outline: 1px solid #5F8D4E;
        transform: translateX(3px) translateY(3px);
    }

    *{
        margin: 0;
    }

    .product-image {
        max-width: 100%;
        border-radius: 0.35rem;
        overflow: hidden;
        margin: 0.3rem auto 0;
    }

    .product-name {
        text-align: center;
        font-size: 1.35rem;
        margin: 0.5rem auto;
        font-weight: 700;
        color: #242424;
    }

    .bottom {
        display: flex;
        flex-direction: row;
        justify-content: space-evenly;
        align-items: center;
        width: 100%;
        margin: 0.5rem auto;
    }

    .price {
        color: #008000;
        font-size: 1.25rem;
        font-weight: bold;
    }

    button {
        padding: 0.25rem 0.5rem;
        border-radius: 0.15rem;
        font-size: 1rem;
        transition: all 0.2s ease-in-out;
        scale: 0.95;
        display: flex;
        align-items: center;
        justify-content: center;
        gap: 0.2rem;
        border: none;
        box-shadow: 6px 6px 4px #24242450;
        background-color: #5F8D4E;
        color: #e3e3e4;
        cursor: pointer;
        &:hover {
            background-color: transparent;
            color: #242424;
            outline: 1px solid #242424;
            scale: 1;
        }
    }
`


const NewProducts = ({ products }) => {
    const { addProduct } = useContext(CartContext)

    return (
        <Center>
            <div>
                <Heading>Latest Collections</Heading>
                <ProductsGrid>
                    {products.map(product => (
                        <ProductBox key={product._id}>
                            <Link href={`/products/${product._id}`}>
                                <img className="product-image" src={product.images[0]} alt={product.name} width={148} height={148} />
                            </Link>
                            <Link href={`/products/${product._id}`}>
                                <h3 className="product-name">
                                    <span className={poppins.className}>{product.name}</span>
                                </h3>
                            </Link>
                            <div className="bottom">
                                <div className="price">
                                    <p><span className={poppins.className}>{product.price} ₹</span></p>
                                </div>
                                <div className="button-box">
                                    <Link href="/"><button onClick={() => addProduct(product._id)}><MdOutlineShoppingCart />Add to cart</button></Link>
                                </div>
                            </div>

                        </ProductBox>
                    ))}
                </ProductsGrid>
            </div>
        </Center>
    )
}

export default NewProducts