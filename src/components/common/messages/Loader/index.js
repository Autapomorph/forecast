import React, { Fragment } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSpinner } from '@fortawesome/free-solid-svg-icons';

import { StyledLoaderMessage } from './styles';

const Loader = ({ children, ...props }) => (
  <StyledLoaderMessage {...props}>{children}</StyledLoaderMessage>
);

Loader.defaultProps = {
  children: (
    <Fragment>
      <span>Загрузка&nbsp;</span>
      <FontAwesomeIcon icon={faSpinner} size="lg" spin />
    </Fragment>
  ),
};

export default Loader;
