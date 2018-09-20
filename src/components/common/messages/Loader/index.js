import React from 'react';

import { StyledLoaderMessage } from './styles';

const Loader = ({ children, ...props }) => (
  <StyledLoaderMessage {...props}>{children}</StyledLoaderMessage>
);

Loader.defaultProps = {
  children: 'Загрузка',
};

export default Loader;
