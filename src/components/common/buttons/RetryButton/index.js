import React from 'react';
import { faRedoAlt } from '@fortawesome/free-solid-svg-icons';

import { StyledRetryButton } from './styles';

const RetryButton = ({ onClick, ...props }) => (
  <StyledRetryButton icon={faRedoAlt} onClick={onClick} {...props} />
);

export default RetryButton;
