import React, { Fragment } from 'react';
import faStarSolid from '@fortawesome/free-solid-svg-icons/faStar';
import faStarRegular from '@fortawesome/free-regular-svg-icons/faStar';

import { StyledFeaturedButton } from './styles';

const FeaturedButton = ({ isFeatured = false, onAdd = () => {}, onRemove = () => {} }) => (
  <Fragment>
    {isFeatured && <StyledFeaturedButton icon={faStarSolid} size="lg" onClick={onRemove} />}
    {!isFeatured && <StyledFeaturedButton icon={faStarRegular} size="lg" onClick={onAdd} />}
  </Fragment>
);

export default FeaturedButton;
