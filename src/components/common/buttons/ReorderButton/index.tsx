import React from 'react';
import { faSort } from '@fortawesome/free-solid-svg-icons';
import { SizeProp } from '@fortawesome/fontawesome-svg-core';

import * as S from './styles';

type Props = {
  isDragging: boolean;
  size?: SizeProp;
};

const ReorderButton: React.FC<Props> = ({ size, ...props }): React.ReactElement => (
  <S.ReorderButton icon={faSort} size={size} {...props} />
);

export default ReorderButton;
