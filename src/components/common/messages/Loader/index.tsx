import React from 'react';
import MDSpinner from 'react-md-spinner';

import * as S from './styles';

type Props = {
  children: React.ReactNode;
};

const Loader = ({ children, ...props }: Props): React.ReactElement => (
  <S.LoaderMessage {...props}>{children}</S.LoaderMessage>
);

Loader.defaultProps = {
  children: <MDSpinner singleColor="#fff" />,
};

export default Loader;
