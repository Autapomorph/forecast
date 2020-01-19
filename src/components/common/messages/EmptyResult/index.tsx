import React from 'react';

import * as S from './styles';

const EmptyResult: React.FC = ({ children, ...props }): React.ReactElement => (
  <S.EmptyResultMessage {...props}>{children}</S.EmptyResultMessage>
);

export default EmptyResult;
