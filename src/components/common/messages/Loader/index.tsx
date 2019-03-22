import React from 'react';
import MDSpinner from 'react-md-spinner';

import { StyledLoaderMessage } from './styles';

const Loader: React.FC = ({ children, ...props }): React.ReactElement => (
  <StyledLoaderMessage {...props}>{children}</StyledLoaderMessage>
);

Loader.defaultProps = {
  children: <MDSpinner singleColor="#fff" />,
};

export default Loader;
