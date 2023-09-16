"use client"

import Center from "@/components/Center"
import Header from "@/components/Header"
import Head from "next/head"
import { styled } from "styled-components"
import { CartContext } from "@/components/CartContext"
import { useContext, useState, useEffect } from "react"
import axios from "axios"
import { FaPlus, FaMinus } from "react-icons/fa"
import { Poppins } from "next/font/google"
import Button from "@/components/Button"
import CartForm from "@/components/CartForm"
import { useRouter } from "next/router"

const poppins = Poppins({
    subsets: ['latin'],
    weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
})

const ColumnWrapper = styled.div`
    display: grid;
    grid-template-columns: 1.3fr 0.7fr;
    gap: 2.5rem;
    margin: 2.5rem auto;
`

const Box = styled.div`
    border-radius: 0.5rem;
    outline: 1px solid #242424;
    padding: 1rem;
    color: #272829;
    box-shadow: 8px 8px 16px #24242450;
    transition: all 0.2s ease-in-out;
    margin: 1rem auto;
    width: 100%;

    .product-box {
        display: flex;
        justify-content: space-between;
        align-items: center;
        margin: 1rem 0;
        padding: 0;
    }

    .qty-box {
        display: flex;
        align-items: center;
        gap: 0.45rem;
    }

    img {
        max-width: 150px;
        outline: 1px solid #242424;
        border-radius: 0.5rem;
    }

    .name-image {
        display: flex;
        align-items: center;
        gap: 1rem;
    }

    .price-number {
        display: flex;
        align-items: center;
        justify-content: space-between;
        gap: 1rem;
    }

    .checkout-button {
        margin: 1rem 0;
        padding: 0.5rem 1rem;
        border-radius: 0.25rem;
        font-size: 1.2rem;
        width: 100%;
        cursor: pointer;
        transition: all 0.2s ease-in-out;
        scale: 0.95;
        display: flex;
        align-items: center;
        justify-content: center;
        gap: 0.2rem;
        background-color: #242424;
        color: #fff;

        &:hover {
            background-color: transparent;
            color: #242424;
            scale: 1;
        }
    }

    .total-price {
        font-size: 1.25rem;
        font-weight: 600;
        color: #008000;
    }
`

const Cart = () => {
    const { cartProducts, addProduct, removeProduct } = useContext(CartContext)
    const [products, setProducts] = useState([])
    useEffect(() => {
        if (cartProducts.length > 0) {
            axios.post('/api/cart', { ids: cartProducts })
                .then(res => {
                    setProducts(res.data)
                })
        }
    }, [])

    function moreOfThisProduct(id) {
        addProduct(id)
        setProducts(products)
    }

    function lessOfThisProduct(id) {
        removeProduct(id)
        setProducts(products)
    }

    let total = 0
    for (const productId of cartProducts) {
        const price = products.find(p => p._id === productId)?.price || 0
        total += price
    }

    const router = useRouter()

    if (router.asPath.includes('success')) {
        return (
            <>
                <Head>
                    <title>Success</title>
                </Head>
                <Header />
                <Center>
                    <Box>
                        <h2 className={poppins.className}>Your order has been placed successfully</h2>
                        <p className={poppins.className}>You will receive an email with the order details</p>
                        <Button type="green" onClick={() => router.push('/')}>Go back to home</Button>
                    </Box>
                </Center>

            </>
        )
    }

    return (
        <>
            <Head>
                <title>Cart</title>
            </Head>
            <Header />
            <Center>
                <ColumnWrapper>
                    <Box>
                        {!cartProducts?.length ? <h2 className={poppins.className}>Your cart is empty</h2> : <h2 className={poppins.className}>Your Cart</h2>}
                        {products.length > 0 && (
                            products.map(product => (
                                <>
                                    <div className="product-box" key={product.id}>
                                        <div className="name-image">
                                            <img src={product.images[0]} alt={product.name} />
                                            <h3 className={poppins.className}>{product.name}</h3>
                                        </div>
                                        <div className="qty-box">
                                            <Button type="red" onClick={() => lessOfThisProduct(product._id)}><FaMinus /></Button>
                                            <h3 className={poppins.className}>{cartProducts.filter(id => id === product._id).length}</h3>
                                            <Button type="green" onClick={() => moreOfThisProduct(product._id)}><FaPlus /></Button>
                                        </div>
                                        <div className="price-number">
                                            <p className={poppins.className}>₹{cartProducts.filter(id => id === product._id).length * product.price}</p>
                                        </div>
                                    </div>
                                    <div>
                                        <h3 className={poppins.className}>Total amount: ₹{total}</h3>
                                    </div>
                                </>

                            ))
                        )}
                    </Box>
                    {!!products?.length &&
                        <Box>
                            <h2 className={poppins.className}>Order Information</h2>
                            <CartForm />
                        </Box>
                    }
                </ColumnWrapper>
            </Center>
        </>
    )
}

export default Cart