import React from 'react';

import * as S from './styles';

type Props = {
  children: React.ReactNode;
};

const Error = ({ children, ...props }: Props): React.ReactElement => (
  <S.ErrorMessage {...props}>{children}</S.ErrorMessage>
);

export default Error;
