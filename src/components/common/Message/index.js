import React from 'react';

import { StyledMessageWrapper, StyledMessageContent } from './styles';

const Message = ({ children, ...props }) => (
  <StyledMessageWrapper {...props}>
    <StyledMessageContent>{children}</StyledMessageContent>
  </StyledMessageWrapper>
);

export default Message;
