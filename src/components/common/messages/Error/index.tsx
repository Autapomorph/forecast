import React from 'react';

import { StyledErrorMessage } from './styles';

const Error: React.FC = ({ children, ...props }): React.ReactElement => (
  <StyledErrorMessage {...props}>{children}</StyledErrorMessage>
);

export default Error;
