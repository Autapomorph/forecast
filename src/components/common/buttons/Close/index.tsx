import React from 'react';
import { faTimes } from '@fortawesome/free-solid-svg-icons';
import { SizeProp } from '@fortawesome/fontawesome-svg-core';

import * as S from './styles';

type Props = {
  onClick: () => void;
  size?: SizeProp;
};

const CloseButton = ({ size, onClick, ...props }: Props): React.ReactElement => (
  <S.CloseButton icon={faTimes} size={size} onClick={onClick} {...props} />
);

export default CloseButton;
