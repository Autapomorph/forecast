import React from 'react';

import { StyledTitle, StyledSubtitle } from './styles';

const Title = ({ children }) => <StyledTitle>{children}</StyledTitle>;

Title.Subtitle = ({ children }) => <StyledSubtitle>{children}</StyledSubtitle>;

export default Title;
