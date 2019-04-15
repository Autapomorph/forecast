import React from 'react';
import { faRedoAlt } from '@fortawesome/free-solid-svg-icons';
import { Props as FontAwesomeIconProps } from '@fortawesome/react-fontawesome';

import { StyledRetryButton } from './styles';

interface IRetryButtonProps extends Partial<FontAwesomeIconProps> {
  onClick: (event: React.MouseEvent) => void;
}

const RetryButton: React.FC<IRetryButtonProps> = ({ onClick, ...props }): React.ReactElement => (
  // @ts-ignore
  <StyledRetryButton icon={faRedoAlt} onClick={onClick} {...props} />
);

export default RetryButton;
