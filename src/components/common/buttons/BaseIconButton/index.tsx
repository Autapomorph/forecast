import React from 'react';
import { FontAwesomeIcon, Props as FontAwesomeIconProps } from '@fortawesome/react-fontawesome';

import { StyledIconButton } from './styles';

const BaseIconButton: React.FC<FontAwesomeIconProps> = ({
  icon,
  size,
  onClick = () => {},
  ...props
}): React.ReactElement => (
  <StyledIconButton {...props}>
    <FontAwesomeIcon icon={icon} size={size} onClick={onClick} />
  </StyledIconButton>
);

export default BaseIconButton;
