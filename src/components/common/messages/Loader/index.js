import React from 'react';
import MDSpinner from 'react-md-spinner';

import { StyledLoaderMessage } from './styles';

const Loader = ({ children, ...props }) => (
  <StyledLoaderMessage {...props}>{children}</StyledLoaderMessage>
);

Loader.defaultProps = {
  children: <MDSpinner singleColor="#fff" />,
};

export default Loader;
