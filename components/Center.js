import { styled } from 'styled-components'

const StyledDiv = styled.div`
    max-width: 75%;
    margin: 0 auto;
    padding: 0 1.25rem;
`

const Center = ({ children }) => {
    return (
        <StyledDiv>
            {children}
        </StyledDiv>
    )
}

export default Center