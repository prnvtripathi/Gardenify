import Link from "next/link"
import styled from "styled-components"
import Center from "./Center"


const StyledHeader = styled.header`
  background-color: #242424;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 2rem;
  color: #fff;
  nav {
    display: flex;
    gap: 1rem;
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
`

const Header = () => {
  return (
    <StyledHeader>
      <Center>
        <Logo href="/">Gardenify</Logo>
        <nav>
          <Link href="/">Home</Link>
          <Link href="/allproducts">All Products</Link>
          <Link href="/categories">Categories</Link>
          <Link href="/account">Account</Link>
          <Link href="/cart">Cart {0}</Link>
        </nav>
      </Center>
    </StyledHeader>
  )
}

export default Header