import { MdOutlineShoppingCart } from "react-icons/md"
import styled from "styled-components"
import Center from "./Center"
import Button from "./Button"
import Link from "next/link"


const Bg = styled.div`
    background-color: #242424;
    color: #fff;
    padding: 3rem 0;
`

const Title = styled.h1`
    margin: 0;
    font-weight: bold;
    font-size: 3rem;
`

const Desc = styled.p`
    color: #aaa;
`

const ColumnsWrapper = styled.div`
    display: grid;
    grid-template-columns: 1.2fr 0.8fr;
    gap: 2rem;
`

const Column = styled.div`
    display: flex;
    align-items: center;
    img {
        max-width: 100%;
        border-radius: 0.5rem;
        width: 70%;
    }
`

const ButtonWrapper = styled.div`
    display: flex;
    gap: 0.5rem;
`

const Featured = ({ product }) => {
    return (
        <Bg>
            <Center>
                <ColumnsWrapper>
                    <Column>
                        <div>
                            <Title>{product.name}</Title>
                            <Desc>
                                {product.description}
                            </Desc>
                            <ButtonWrapper>
                                <Link href={"/products/" + product._id}>
                                    <Button type="primary">Learn More</Button>
                                </Link>
                                <Link href="/">
                                    <Button type="secondary"><MdOutlineShoppingCart size={16} />Add to Cart</Button>
                                </Link>
                            </ButtonWrapper>
                        </div>
                    </Column>
                    <Column>
                        <img src={product.images[0]} alt="featured" />
                    </Column>
                </ColumnsWrapper>

            </Center>
        </Bg>
    )
}

export default Featured