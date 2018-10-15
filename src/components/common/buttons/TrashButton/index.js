import React, { Fragment } from 'react';
import { faTrashAlt } from '@fortawesome/free-solid-svg-icons';

import { StyledTrashButton } from './styles';

const TrashButton = ({ isEmpty = false, size = 'lg', onClick = () => {}, ...props }) => (
  <Fragment>
    {!isEmpty && <StyledTrashButton icon={faTrashAlt} onClick={onClick} size={size} {...props} />}
  </Fragment>
);

export default TrashButton;
