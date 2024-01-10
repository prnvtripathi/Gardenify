import Link from "next/link"
import styled from "styled-components"
import Center from "./Center"
import { CartContext } from "./CartContext"
import { useContext } from "react"

import { Montserrat } from "next/font/google"

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
})

const StyledHeader = styled.header`
  background-color: #242424;
  color: #fff;
  nav {
    display: flex;
    gap: 1rem;
    align-items: center;
    justify-content: space-around;
  }
  nav a {
    text-decoration: none;
    color: #fff;
  }
  nav a:hover {
    color: #ccc;
  }
`

const Logo = styled(Link)`
  font-size: 1.5rem;
  font-weight: 700;
  text-decoration: none;
  color: #fff;
  transition: all 0.2s ease-in-out;
  padding: 0.2rem 0.5rem;

  &:hover {
    text-shadow: 0 0.15rem 0.25rem #1db954;
    transform: translateY(-0.25em);
  }
`

const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 1rem;
  padding: 1rem 0;
`

const Header = () => {
  const { cartProducts } = useContext(CartContext)


  return (
    <StyledHeader>
      <Center>
        <Wrapper>
          <Logo href="/"><span className={montserrat.className}>Gardenify</span></Logo>
          <span className={montserrat.className}>
            <nav>
            <Link href="/">Home</Link>
            <Link href="/products">All Products</Link>
            <Link href="/categories">Categories</Link>
            <Link href="/account">Account</Link>
            <Link href="/cart">Cart {cartProducts.length}</Link>
          </nav>
          </span>
        </Wrapper>
      </Center>
    </StyledHeader>
  )
}

export default Header