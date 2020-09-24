import React from 'react';
import { toAuthor, toTasks } from '../routes';
import { Item, List, StyledNavLink } from './styled';


export default () => {
    return (
        <nav>
            <List>
                <Item>
                    <StyledNavLink to={toTasks()}> Tasks</StyledNavLink>
                </Item>
                <Item>
                    <StyledNavLink to={toAuthor()}> About Author</StyledNavLink>
                </Item>
            </List>
        </nav>
    )
}