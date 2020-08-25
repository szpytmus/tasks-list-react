import React from 'react';
import { StyledSection, StyledSectionHeader, StyledSectionTitle, StyledSectionDiv} from './styled.js'

const Section = ({title, body, extraHeaderContent}) => (
    <StyledSection>
        <StyledSectionHeader >
            <StyledSectionTitle>{title}</StyledSectionTitle>
            {extraHeaderContent}
        </StyledSectionHeader>
        <StyledSectionDiv>
            {body}
        </StyledSectionDiv>
    </StyledSection>
);

export default Section;