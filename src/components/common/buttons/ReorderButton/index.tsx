import React from 'react';
import { faSort } from '@fortawesome/free-solid-svg-icons';
import { SizeProp } from '@fortawesome/fontawesome-svg-core';

import { StyledReorderButton } from './styles';

interface IReorderButtonProps {
  isDragging: boolean;
  size?: SizeProp;
}

const ReorderButton: React.FC<IReorderButtonProps> = ({
  size = 'lg',
  ...props
}): React.ReactElement => <StyledReorderButton icon={faSort} size={size} {...props} />;

export default ReorderButton;
