import React, { Fragment } from 'react';
import { faTrashAlt } from '@fortawesome/free-solid-svg-icons';

import { StyledTrashButton } from './styles';

const TrashButton = ({ isEmpty = false, onClick = () => {} }) => (
  <Fragment>
    {!isEmpty && <StyledTrashButton icon={faTrashAlt} onClick={onClick} size="lg" />}
  </Fragment>
);

export default TrashButton;
