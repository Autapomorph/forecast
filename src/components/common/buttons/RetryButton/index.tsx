import React from 'react';
import { faRedoAlt } from '@fortawesome/free-solid-svg-icons';

import { SizeProp } from '@fortawesome/fontawesome-svg-core';

import { StyledRetryButton } from './styles';

interface IRetryButtonProps {
  size?: SizeProp;
  onClick: () => void;
}

const RetryButton: React.FC<IRetryButtonProps> = ({ onClick, ...props }): React.ReactElement => (
  <StyledRetryButton icon={faRedoAlt} onClick={onClick} {...props} />
);

export default RetryButton;
