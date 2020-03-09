import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { IconProp, SizeProp } from '@fortawesome/fontawesome-svg-core';

import * as S from './styles';

type Props = {
  icon: IconProp;
  size?: SizeProp;
  onClick?: (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
};

const BaseIconButton = ({ icon, size = 'lg', onClick, ...props }: Props): React.ReactElement => (
  <S.IconButton onClick={e => onClick?.(e)} {...props}>
    <FontAwesomeIcon icon={icon} size={size} />
  </S.IconButton>
);

export default BaseIconButton;
