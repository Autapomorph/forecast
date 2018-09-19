import React from 'react';

import { StyledErrorMessage } from './styles';

const Error = ({ children, ...props }) => (
  <StyledErrorMessage {...props}>{children}</StyledErrorMessage>
);

export default Error;
