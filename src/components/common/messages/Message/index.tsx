import React from 'react';

import * as S from './styles';

const Message: React.FC = ({ children, ...props }): React.ReactElement => (
  <S.MessageWrapper {...props}>
    <S.MessageContent>{children}</S.MessageContent>
  </S.MessageWrapper>
);

export default Message;
