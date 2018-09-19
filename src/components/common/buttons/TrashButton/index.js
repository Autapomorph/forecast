import React, { Fragment } from 'react';
import faTrashAlt from '@fortawesome/fontawesome-free-solid/faTrashAlt';

import { StyledTrashButton } from './styles';

const TrashButton = ({ isEmpty = false, onClick = () => {} }) => (
  <Fragment>
    {!isEmpty && <StyledTrashButton icon={faTrashAlt} onClick={onClick} size="lg" />}
  </Fragment>
);

export default TrashButton;
