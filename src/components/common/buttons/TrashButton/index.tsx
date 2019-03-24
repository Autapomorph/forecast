import React, { Fragment } from 'react';
import { faTrashAlt } from '@fortawesome/free-solid-svg-icons';
import { SizeProp } from '@fortawesome/fontawesome-svg-core';

import { StyledTrashButton } from './styles';

interface ITrashButtonProps {
  isEmpty: boolean;
  size?: SizeProp;
  onClick: () => void;
}

const TrashButton: React.FC<ITrashButtonProps> = ({
  isEmpty = false,
  size = 'lg',
  onClick = () => {},
  ...props
}): React.ReactElement => (
  <Fragment>
    {!isEmpty && <StyledTrashButton icon={faTrashAlt} onClick={onClick} size={size} {...props} />}
  </Fragment>
);

export default TrashButton;
