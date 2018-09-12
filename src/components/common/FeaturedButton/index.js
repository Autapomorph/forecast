import React, { Fragment } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import faStarSolid from '@fortawesome/fontawesome-free-solid/faStar';
import faStarRegular from '@fortawesome/fontawesome-free-regular/faStar';

import { StyledFeaturedButton } from './styles';

const FeaturedButton = ({ isFeatured = false, onAdd = () => {}, onRemove = () => {} }) => (
  <Fragment>
    {isFeatured && (
      <StyledFeaturedButton onClick={onRemove}>
        <FontAwesomeIcon icon={faStarSolid} size="lg" />
      </StyledFeaturedButton>
    )}
    {!isFeatured && (
      <StyledFeaturedButton onClick={onAdd}>
        <FontAwesomeIcon icon={faStarRegular} size="lg" />
      </StyledFeaturedButton>
    )}
  </Fragment>
);

export default FeaturedButton;
