import styled, { css } from "styled-components";

export const List = styled.ul`
    list-style-type: none;
    padding:10px;
    margin: 0;
    margin-top:10px;

`;

export const Item = styled.li`
    border-bottom: 3px solid ${({ theme }) => theme.color.gallery};
    display:grid;
    grid-template-columns: auto 1fr auto;
    grid-gap:10px;
    align-items:center;
    padding:10px;
    border-bottom: 1px solid ${({ theme }) => theme.color.alto};
    

    ${({ hidden }) => hidden && css`
        display: none;
    `}

`;

export const Content = styled.span`
    flex-grow: 1;
    margin: 0 10px; 

    ${({ done }) => done && css`
        text-decoration: line-through;
    `}
`;

export const Button = styled.button`
    border: none;
    color: ${({ theme }) => theme.color.white};
    width: 30px;
    height: 30px;
    padding: 0;
    transition: background 0.3s;

    ${({ toggleDone }) => toggleDone && css`
        background: ${({ theme }) => theme.color.forestGreen};
        &:hover{
        filter:brightness(120%);
        }
    `}

    ${({ remove }) => remove && css`
        background: ${({ theme }) => theme.color.crimson};
        &:hover{
        filter:brightness(120%);
        }
    `}
`;