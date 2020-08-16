import styled, { css } from "styled-components";

export const List = styled.ul`
    list-style-type: none;
    padding:10px;
    margin: 0;
    margin-top:10px;

`;

export const Item = styled.li`
    border-bottom: 3px solid #eee;
    display:grid;
    grid-template-columns: auto 1fr auto;
    grid-gap:10px;
    align-items:center;
    padding:10px;
    border-bottom: 1px solid #ddd;
    

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
    color: white;
    width: 30px;
    height: 30px;
    padding: 0;
    transition: background 0.3s;

    ${({toggleDone}) => toggleDone && css`
        background:hsl(120, 61%, 34%);
        &:hover{
        background:hsl(120, 61%, 39%);
        }
    `}

    ${({remove}) => remove && css`
        background:hsl(348, 83%, 47%);
        &:hover{
        background:hsl(120, 61%, 52%);
        }
    `}
`;