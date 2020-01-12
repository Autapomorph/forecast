import React from 'react';
import { faSort } from '@fortawesome/free-solid-svg-icons';
import { Props as FontAwesomeIconProps } from '@fortawesome/react-fontawesome';

import { StyledReorderButton } from './styles';

type Props = {
  isDragging: boolean;
} & Partial<FontAwesomeIconProps>;

const ReorderButton: React.FC<Props> = ({ size = 'lg', ...props }): React.ReactElement => (
  <StyledReorderButton icon={faSort} size={size} {...props} />
);

export default ReorderButton;
