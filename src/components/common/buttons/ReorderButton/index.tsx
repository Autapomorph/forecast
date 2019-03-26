import React from 'react';
import { faSort } from '@fortawesome/free-solid-svg-icons';
import { Props as FontAwesomeIconProps } from '@fortawesome/react-fontawesome';

import { StyledReorderButton } from './styles';

interface IReorderButtonProps extends Partial<FontAwesomeIconProps> {
  isDragging: boolean;
}

const ReorderButton: React.FC<IReorderButtonProps> = ({
  size = 'lg',
  ...props
}): React.ReactElement => <StyledReorderButton icon={faSort} size={size} {...props} />;

export default ReorderButton;
