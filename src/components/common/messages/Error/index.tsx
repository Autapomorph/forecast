import React from 'react';

import * as S from './styles';

const Error: React.FC = ({ children, ...props }): React.ReactElement => (
  <S.ErrorMessage {...props}>{children}</S.ErrorMessage>
);

export default Error;
