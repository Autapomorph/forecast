import React from 'react';

import { StyledMessageContainer, StyledMessageContent } from './styles';

const Message = ({ children, success, error, ...props }) => (
  <StyledMessageContainer success={success} error={error} {...props}>
    <StyledMessageContent>{children}</StyledMessageContent>
  </StyledMessageContainer>
);

export default Message;
