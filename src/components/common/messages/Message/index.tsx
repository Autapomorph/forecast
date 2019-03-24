import React from 'react';

import { StyledMessageWrapper, StyledMessageContent } from './styles';

const Message: React.FC = ({ children, ...props }): React.ReactElement => (
  <StyledMessageWrapper {...props}>
    <StyledMessageContent>{children}</StyledMessageContent>
  </StyledMessageWrapper>
);

export default Message;
