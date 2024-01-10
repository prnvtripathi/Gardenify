import Center from "@/components/Center";
import Header from "@/components/Header";
import { mongooseConnect } from "@/lib/mongoose";
import { Product } from "@/models/Product";
import styled from "styled-components";
import ProductImages from "@/components/ProductImages";
import Button from "@/components/Button";
import { useContext } from "react";
import { CartContext } from "@/components/CartContext";
import { MdOutlineShoppingCart } from "react-icons/md";
import { Poppins } from "next/font/google";

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
})

const ColWrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  @media screen and (min-width: 768px) {
    grid-template-columns: .8fr 1.2fr;
  }
  gap: 40px;
  margin: 40px 0;
`;

const WhiteBox = styled.div`
  background-color: #fff;
  border-radius: 10px;
  padding: 30px;
`;

const Title = styled.h1`
  font-size: 2rem;
  margin: 0;
`;

const PriceRow = styled.div`
  display: flex;
  gap: 20px;
  align-items: center;
`;
const Price = styled.span`
  font-size: 1.4rem;
`;

export default function ProductPage({ product }) {
  const { addProduct } = useContext(CartContext);
  return (
    <>
      <Header />
      <Center>
        <ColWrapper>
          <WhiteBox>
            <ProductImages images={product.images} />
          </WhiteBox>
          <div className={poppins.className}>
            <Title>{product.name}</Title>
            <p>{product.description}</p>
            <PriceRow>
              <div>
                <Price>{product.price}₹</Price>
              </div>
              <div>
                <Button type="secondary-alt" onClick={() => addProduct(product._id)}>
                  <MdOutlineShoppingCart />Add to cart
                </Button>
              </div>
            </PriceRow>
          </div>
        </ColWrapper>
      </Center>
    </>
  );
}

export async function getServerSideProps(context) {
  await mongooseConnect();
  const { id } = context.query;
  const product = await Product.findById(id);
  return {
    props: {
      product: JSON.parse(JSON.stringify(product)),
    }
  }
}