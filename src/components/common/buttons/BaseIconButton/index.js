import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { StyledIconButton } from './styles';

const BaseIconButton = ({ icon, size, onClick = () => {}, ...props }) => (
  <StyledIconButton {...props}>
    <FontAwesomeIcon icon={icon} size={size} onClick={onClick} />
  </StyledIconButton>
);

export default BaseIconButton;
