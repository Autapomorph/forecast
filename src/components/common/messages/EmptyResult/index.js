import React from 'react';

import { StyledEmptyResultMessage } from './styles';

const EmptyResult = ({ children, ...props }) => (
  <StyledEmptyResultMessage {...props}>{children}</StyledEmptyResultMessage>
);

export default EmptyResult;
