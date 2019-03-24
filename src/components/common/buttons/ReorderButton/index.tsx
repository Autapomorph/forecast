import React from 'react';
import { Props as FontAwesomeIconProps } from '@fortawesome/react-fontawesome';
import { faSort } from '@fortawesome/free-solid-svg-icons';

import { StyledReorderButton } from './styles';

interface IReorderButtonProps extends FontAwesomeIconProps {
  isDragging: boolean;
}

const ReorderButton: React.FC<IReorderButtonProps> = ({
  size = 'lg',
  ...props
}): React.ReactElement => <StyledReorderButton icon={faSort} size={size} {...props} />;

export default ReorderButton;
