import React from 'react';
import { faRedoAlt } from '@fortawesome/free-solid-svg-icons';
import { Props as FontAwesomeIconProps } from '@fortawesome/react-fontawesome';

import { StyledRetryButton } from './styles';

interface IProps extends Partial<FontAwesomeIconProps> {
  onClick: (event: React.MouseEvent) => void;
}

const RetryButton: React.FC<IProps> = ({ onClick, ...props }): React.ReactElement => (
  <StyledRetryButton icon={faRedoAlt} onClick={onClick} {...props} />
);

export default RetryButton;
