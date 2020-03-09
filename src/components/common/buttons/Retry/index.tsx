import React from 'react';
import { faRedoAlt } from '@fortawesome/free-solid-svg-icons';
import { SizeProp } from '@fortawesome/fontawesome-svg-core';

import * as S from './styles';

type Props = {
  onClick: (event: React.MouseEvent) => void;
  size?: SizeProp;
};

const RetryButton = ({ size, onClick, ...props }: Props): React.ReactElement => (
  <S.RetryButton icon={faRedoAlt} size={size} onClick={onClick} {...props} />
);

export default RetryButton;
