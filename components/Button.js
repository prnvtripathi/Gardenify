import styled, { css } from "styled-components"

const StyledButton = styled.button`
    margin: 0;
    padding: 0.5rem 1rem;
    border-radius: 0.25rem;
    font-size: 1rem;
    cursor: pointer;
    transition: all 0.3s ease-in-out;
    scale: 0.95;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 0.2rem;

    ${props => props.type === 'primary' && css`
            background-color: transparent;
            border: 1px solid #fff;
            color: #fff;
            
            &:hover {
            background-color: #fff;
            color: #242424;
            scale: 1;
            }
        `
    }

${props => props.type === 'secondary' && css`
            background-color: #e3e3e4;
            border: 1px solid #fff;
            color: #242424;
            
            &:hover {
            background-color: transparent;
            color: #e3e3e4;
            scale: 1;
            }
        `
    }
    
    ${props => props.size === 'l' && css`
            padding: 1rem 1.5rem;
            font-size: 1.25rem;
        `
    }
    
`

const Button = ({ children, ...props }) => {
    return (
        <StyledButton {...props}>
            {children}
        </StyledButton>
    )
}

export default Button