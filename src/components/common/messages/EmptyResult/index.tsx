import React from 'react';

import * as S from './styles';

type Props = {
  children: React.ReactNode;
};

const EmptyResult = ({ children, ...props }: Props): React.ReactElement => (
  <S.EmptyResultMessage {...props}>{children}</S.EmptyResultMessage>
);

export default EmptyResult;
