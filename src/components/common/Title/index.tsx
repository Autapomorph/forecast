import React from 'react';

import { StyledTitle, StyledSubtitle } from './styles';

interface IProps extends React.FC {
  Subtitle: React.FC;
}

const Title: IProps = ({ children }): React.ReactElement => <StyledTitle>{children}</StyledTitle>;

Title.Subtitle = ({ children }): React.ReactElement => <StyledSubtitle>{children}</StyledSubtitle>;

export default Title;
