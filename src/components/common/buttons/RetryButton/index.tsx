import React from 'react';
import { faRedoAlt } from '@fortawesome/free-solid-svg-icons';
import { Props as FontAwesomeIconProps } from '@fortawesome/react-fontawesome';

import { StyledRetryButton } from './styles';

type Props = {
  onClick: (event: React.MouseEvent) => void;
} & Partial<FontAwesomeIconProps>;

const RetryButton: React.FC<Props> = ({ onClick, ...props }): React.ReactElement => (
  <StyledRetryButton icon={faRedoAlt} onClick={onClick} {...props} />
);

export default RetryButton;
