import React from 'react';
import { useHistory, useLocation } from 'react-router-dom';
import Input from '../../Input';
import searchQueryParamName from '../searchQueryParamName';
import { Wrapper } from './styled';

export default () => {

    const location = useLocation();
    const history = useHistory();

    const query = (new URLSearchParams(location.search)).get(searchQueryParamName);
    

    const onTaskFilterChange = ({target}) => {
        const searchParams = new URLSearchParams(location.search);

        if(target.value.trim() === ""){
            searchParams.delete(searchQueryParamName);
        } else {
            searchParams.set(searchQueryParamName, target.value);
        }

        history.push(`${location.pathname}?${searchParams.toString()}`);
    };

    return (
        <Wrapper>
        <Input
            placeholder="Filter"
            value = {query || ""}
            onChange={onTaskFilterChange}
        />
        </Wrapper>
    );
};