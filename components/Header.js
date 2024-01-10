import Link from "next/link";
import styled from "styled-components";
import Center from "@/components/Center";
import { useContext, useState } from "react";
import { CartContext } from "@/components/CartContext";
import { FaBars } from "react-icons/fa6";

const StyledHeader = styled.header`
  background-color: #242424;
  `;
const Logo = styled(Link)`
  color:#fff;
  font-size: 1.5rem;
  font-weight: 700;
  text-decoration: none;
  color: #fff;
  transition: all 0.2s ease-in-out;
  padding: 0.2rem 0.5rem;
  position: relative;
  z-index: 3;

  &:hover {
    text-shadow: 0 0.15rem 0.25rem #1db954;
    transform: translateY(-0.25em);
  }
`;
const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 20px 0;
`;
const StyledNav = styled.nav`
  ${props => props.mobileNavActive ? `
    display: block;
  ` : `
    display: none;
  `}
  gap: 1rem;
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  padding: 70px 20px 20px;
  background-color: #242424;
  z-index: 2;
  @media screen and (min-width: 768px) {
    display: flex;
    position: static;
    padding: 0;
  }
`;
const NavLink = styled(Link)`
  display: block;
  color:#eee;
  text-decoration:none;
  padding-block: 0.5rem;
  background-image: linear-gradient(90deg, #1db954 , #1db);
  background-repeat: no-repeat;
  background-size: 0% 2px;
  background-position: 0 60%;
  transition: background-size 0.2s ease-in-out;
  @media screen and (min-width: 768px) {
    padding:0;
    background-image: none;
  }

  &:hover {
    background-size: 100% 2px;
  }
`;
const NavButton = styled.button`
  background-color: transparent;
  width: 30px;
  height: 30px;
  border:0;
  color: white;
  cursor: pointer;
  position: relative;
  z-index: 3;
  @media screen and (min-width: 768px) {
    display: none;
  }
`;

export default function Header() {
  const { cartProducts } = useContext(CartContext);
  const [mobileNavActive, setMobileNavActive] = useState(false);
  return (
    <StyledHeader>
      <Center>
        <Wrapper>
          <Logo href={'/'}>Ecommerce</Logo>
          <StyledNav mobileNavActive={mobileNavActive}>
            <NavLink href={'/'}>Home</NavLink>
            <NavLink href={'/products'}>All products</NavLink>
            {/* <NavLink href={'/categories'}>Categories</NavLink>
            <NavLink href={'/account'}>Account</NavLink> */}
            <NavLink href={'/cart'}>Cart ({cartProducts.length})</NavLink>
          </StyledNav>
          <NavButton onClick={() => setMobileNavActive(prev => !prev)}>
            <FaBars />
          </NavButton>
        </Wrapper>
      </Center>
    </StyledHeader>
  );
}