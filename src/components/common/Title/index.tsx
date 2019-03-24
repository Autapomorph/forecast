import React from 'react';

import { StyledTitle, StyledSubtitle } from './styles';

interface ITitle extends React.FC {
  Subtitle: React.FC;
}

const Title: ITitle = ({ children }): React.ReactElement => <StyledTitle>{children}</StyledTitle>;

Title.Subtitle = ({ children }): React.ReactElement => <StyledSubtitle>{children}</StyledSubtitle>;

export default Title;
