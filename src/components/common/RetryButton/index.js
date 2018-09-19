import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import faRedoAlt from '@fortawesome/fontawesome-free-solid/faRedoAlt';

import { StyledRetryButton } from './styles';

const RetryButton = ({ onClick = () => {} }) => (
  <StyledRetryButton onClick={onClick}>
    <FontAwesomeIcon icon={faRedoAlt} />
  </StyledRetryButton>
);

export default RetryButton;
