import styled from 'styled-components';

export const StyledForm = styled.form`
    margin: 20px;
    display: grid;
    grid-template-columns: 1fr auto;
    grid-gap:20px;  

    @media (max-width: ${({ theme }) => theme.breakpoint.mobileMax}px) {
        grid-template-columns: 1fr;
    }

`;

export const Button = styled.button`
    height: 50px;
    font-size: 20px;
    background-color: ${({ theme }) => theme.color.teal};
    color: ${({ theme }) => theme.color.white};
    border: none;
    padding: 15px;
    transition: 2s;

    @media (max-width: ${({ theme }) => theme.breakpoint.mobileMax}px) {
        flex-grow: 1;
    }

    &:hover{
    background-color: hsl(180, 100%, 45%);
    transform: scale(1.2);
    }
`;