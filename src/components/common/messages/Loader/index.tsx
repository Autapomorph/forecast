import React from 'react';
import MDSpinner from 'react-md-spinner';

import * as S from './styles';

const Loader: React.FC = ({ children, ...props }): React.ReactElement => (
  <S.LoaderMessage {...props}>{children}</S.LoaderMessage>
);

Loader.defaultProps = {
  children: <MDSpinner singleColor="#fff" />,
};

export default Loader;
