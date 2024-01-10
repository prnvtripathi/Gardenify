import React from 'react';
import styled from 'styled-components';
import Link from 'next/link';

const FooterContainer = styled.footer`
    background-color: #242424;
    padding: 20px 30px 20px 30px;
    margin: 0;
    position: static;
    bottom: 0;
    left: 0;
    right: 0;
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

const Footer = () => {
    return (
        <FooterContainer>
            <Logo href={'/'}>Gardenify</Logo>
        </FooterContainer>
    );
};

export default Footer;
