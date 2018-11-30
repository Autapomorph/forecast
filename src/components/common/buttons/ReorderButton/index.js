import React from 'react';
import { faSort } from '@fortawesome/free-solid-svg-icons';

import { StyledReorderButton } from './styles';

const ReorderButton = ({ size = 'lg', ...props }) => (
  <StyledReorderButton icon={faSort} size={size} {...props} />
);

export default ReorderButton;
