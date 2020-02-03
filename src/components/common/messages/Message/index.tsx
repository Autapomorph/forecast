import React from 'react';

import * as S from './styles';

type Props = {
  children: React.ReactNode;
};

const Message = ({ children, ...props }: Props): React.ReactElement => (
  <S.MessageWrapper {...props}>
    <S.MessageContent>{children}</S.MessageContent>
  </S.MessageWrapper>
);

export default Message;
