import React from 'react';
import Input from '../../Input';
import { useQueryParameter, useReplaceQueryParameter } from '../QueryParameter';
import searchQueryParamName from '../searchQueryParamName';
import { Wrapper } from './styled';

export default () => {

    const query = useQueryParameter(searchQueryParamName);
    const replaceQueryParameter = useReplaceQueryParameter();
    

    const onTaskFilterChange = ({target}) => {
        replaceQueryParameter({
            key: searchQueryParamName,
            value: target.value.trim() !== "" ? target.value: undefined,
        });
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