import { NavLink } from "react-router-dom";
import styled from "styled-components";

const activeClassName = "link-active";

export const StyledNavLink = styled(NavLink).attrs(() => ({
    activeClassName,
}))`
    
    color: ${({ theme }) => theme.color.white};
    text-decoration: none;
    
    &.${activeClassName} {
        font-weight: bold;
    }

    &:hover {
        border-bottom: 1px solid;
    }
`;

export const List = styled.ul`
background: ${({ theme }) => theme.color.teal};
margin: 0;
padding: 0;
display: flex;
justify-content: center;
list-style: none;
`;

export const Item = styled.li`
margin: 20px;
`;