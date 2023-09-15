"use client"

import { styled } from "styled-components"
import { useContext, useState } from "react"
import { CartContext } from "@/components/CartContext"
import axios from "axios"

const StyledInput = styled.input`
width: 100%;
border-radius: 0.25rem;
margin: 0 auto 0.75rem;
padding: 0.5rem 1rem;
border: 1px solid gray;
box-sizing: border-box;
`

const HalfInput = styled.div`
width: 100%;
display: flex;
gap: 0.25rem;
`

const CartForm = () => {

    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [phone, setPhone] = useState("")
    const [street, setStreet] = useState("")
    const [locality, setLocality] = useState("")
    const [city, setCity] = useState("")
    const [state, setState] = useState("")
    const [country, setCountry] = useState("")
    const [pincode, setPincode] = useState("")

    const { cartProducts } = useContext(CartContext)

    async function goToPayment(ev) {
        ev.preventDefault()
        const response = await axios.post('/api/checkout', {
            name, email, phone, street, locality, city, state, country, pincode, cartProducts
        })
        if (response.data.url) {
            window.location = response.data.url
        }
    }

    return (
        <div>
            <form onSubmit={goToPayment}>
                <StyledInput
                    type="text"
                    placeholder="Name"
                    name="name"
                    value={name}
                    onChange={ev => setName(ev.target.value)} />
                <HalfInput>
                    <StyledInput
                        type="email"
                        placeholder="Email"
                        name="email"
                        value={email}
                        onChange={ev => setEmail(ev.target.value)} />
                    <StyledInput
                        type="text"
                        placeholder="Phone"
                        name="phone"
                        value={phone}
                        onChange={ev => setPhone(ev.target.value)} />
                </HalfInput>
                <StyledInput
                    type="text"
                    placeholder="Street Address"
                    name="street"
                    value={street}
                    onChange={ev => setStreet(ev.target.value)} />
                <StyledInput
                    type="text"
                    placeholder="Locality"
                    name="locality"
                    value={locality}
                    onChange={ev => setLocality(ev.target.value)} />
                <HalfInput>
                    <StyledInput
                        type="text"
                        placeholder="City"
                        name="city"
                        value={city}
                        onChange={ev => setCity(ev.target.value)} />
                    <StyledInput
                        type="text"
                        placeholder="State"
                        name="state"
                        value={state}
                        onChange={ev => setState(ev.target.value)} />
                </HalfInput>
                <HalfInput>
                    <StyledInput
                        type="text"
                        placeholder="Country"
                        name="country"
                        value={country}
                        onChange={ev => setCountry(ev.target.value)} />
                    <StyledInput
                        type="text"
                        placeholder="Pincode"
                        name="pincode"
                        value={pincode}
                        onChange={ev => setPincode(ev.target.value)} />
                </HalfInput>
                <button type="submit" className="checkout-button">Proceed to Payment</button>
            </form>
        </div>
    )
}

export default CartForm