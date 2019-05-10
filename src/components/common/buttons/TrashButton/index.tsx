import React, { Fragment } from 'react';
import { faTrashAlt } from '@fortawesome/free-solid-svg-icons';
import { Props as FontAwesomeIconProps } from '@fortawesome/react-fontawesome';

import { StyledTrashButton } from './styles';

interface IProps extends Partial<FontAwesomeIconProps> {
  isEmpty: boolean;
  onClick: () => void;
}

const TrashButton: React.FC<IProps> = ({
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
