import React from 'react';

import { StyledEmptyResultMessage } from './styles';

const EmptyResult: React.FC = ({ children, ...props }): React.ReactElement => (
  <StyledEmptyResultMessage {...props}>{children}</StyledEmptyResultMessage>
);

export default EmptyResult;
