import styled from 'styled-components';

export const Wrapper = styled.div`
    display:flex;
    flex-wrap:wrap;
`;

export const Button = styled.button`
    background:transparent;
    color: ${({ theme }) => theme.color.teal};
    border:none;
    margin: 0 0 0 20px;
    transition: color 0.3s;
    padding: 15px;

    &:hover{
    transform:scale(1.1);
    transition: 1s;
    background-color: hsl(180, 100%, 45%);
    color: ${({ theme }) => theme.color.white};
    border: none;  
    }

    &:disabled{
    background:transparent;
    color: hsl(180, 1%, 75%);
    border:none;
    margin: 0 0 0 20px;
    transition: color 0.3s; 
    }
`;

