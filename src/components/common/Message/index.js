import React from 'react';

import { StyledMessageWrapper, StyledMessageContent } from './styles';

const Message = ({ children, success, error, ...props }) => (
  <StyledMessageWrapper success={success} error={error} {...props}>
    <StyledMessageContent>{children}</StyledMessageContent>
  </StyledMessageWrapper>
);

export default Message;
