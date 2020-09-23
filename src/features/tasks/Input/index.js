import styled from "styled-components";

export default styled.input`
    height: 50px;
    border: 3px solid #eee;
    padding-left: 10px;
    margin-right: 20px;  

    @media (max-width: ${({ theme }) => theme.breakpoint.mobileMax}px) {
        margin-right: 0;
        margin-bottom: 10px;
        width: 100%;
    }

`;

