import React from 'react';

import { StyledTitle, StyledSubtitle } from './styles';

type Props = {
  Subtitle: React.FC;
} & React.FC;

const Title: Props = ({ children }): React.ReactElement => <StyledTitle>{children}</StyledTitle>;

const Subtitle: React.FC = ({ children }): React.ReactElement => (
  <StyledSubtitle>{children}</StyledSubtitle>
);

Title.Subtitle = Subtitle;

export default Title;
