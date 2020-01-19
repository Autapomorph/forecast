import React from 'react';
import { faTrashAlt } from '@fortawesome/free-solid-svg-icons';
import { SizeProp } from '@fortawesome/fontawesome-svg-core';

import * as S from './styles';

type Props = {
  isEmpty: boolean;
  onClick?: () => void;
  size?: SizeProp;
};

const TrashButton: React.FC<Props> = ({
  isEmpty = false,
  size,
  onClick,
  ...props
}): React.ReactElement => (
  <>{!isEmpty && <S.TrashButton icon={faTrashAlt} onClick={onClick} size={size} {...props} />}</>
);

export default TrashButton;
