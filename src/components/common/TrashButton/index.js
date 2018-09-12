import React, { Fragment } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import faTrashAlt from '@fortawesome/fontawesome-free-solid/faTrashAlt';

import { StyledTrashButton } from './styles';

const TrashButton = ({ isEmpty = false, onClick = () => {} }) => (
  <Fragment>
    {!isEmpty && (
      <StyledTrashButton onClick={onClick}>
        <FontAwesomeIcon icon={faTrashAlt} size="lg" />
      </StyledTrashButton>
    )}
  </Fragment>
);

export default TrashButton;
