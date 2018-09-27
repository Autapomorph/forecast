import React from 'react';

import { StyledEmptyListMessage } from './styles';

const EmptyResult = ({ children, ...props }) => (
  <StyledEmptyListMessage {...props}>{children}</StyledEmptyListMessage>
);

export default EmptyResult;
