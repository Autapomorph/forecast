import React from 'react';
import { Props as FontAwesomeIconProps } from '@fortawesome/react-fontawesome';
import { faRedoAlt } from '@fortawesome/free-solid-svg-icons';

import { StyledRetryButton } from './styles';

const RetryButton: React.FC<FontAwesomeIconProps> = ({ onClick, ...props }): React.ReactElement => (
  <StyledRetryButton icon={faRedoAlt} onClick={onClick} {...props} />
);

export default RetryButton;
