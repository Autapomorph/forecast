import React, { Fragment } from 'react';
import { Props as FontAwesomeIconProps } from '@fortawesome/react-fontawesome';
import { faTrashAlt } from '@fortawesome/free-solid-svg-icons';

import { StyledTrashButton } from './styles';

interface ITrashButtonProps extends FontAwesomeIconProps {
  isEmpty: boolean;
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
