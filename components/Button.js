import styled, { css } from "styled-components"

const StyledButton = styled.button`
    margin: 0;
    padding: 0.5rem 1rem;
    border-radius: 0.25rem;
    font-size: 1rem;
    cursor: pointer;
    transition: all 0.2s ease-in-out;
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

    ${props => props.type === 'red' && css`
            background-color: transparent;
            border: 1px solid #ff0000;
            color: #ff0000;
            padding: 0.15rem;
            
            &:hover {
            background-color: #ff0000;
            color: #e3e3e4;
            scale: 1;
            }
        `
    }

    ${props => props.type === 'green' && css`
            background-color: transparent;
            border: 1px solid #1db254;
            color: #1db254;
            padding: 0.15rem;
            
            &:hover {
            background-color: #1db254;
            color: #e3e3e4;
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

${props => props.type === 'secondary-alt' && css`
            background-color: #e3e3e4;
            border: 1px solid #fff;
            color: #242424;
            
            &:hover {
            background-color: #242424;
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