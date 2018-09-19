import React, { Fragment } from 'react';
import faStarSolid from '@fortawesome/fontawesome-free-solid/faStar';
import faStarRegular from '@fortawesome/fontawesome-free-regular/faStar';

import { StyledFeaturedButton } from './styles';

const FeaturedButton = ({ isFeatured = false, onAdd = () => {}, onRemove = () => {} }) => (
  <Fragment>
    {isFeatured && <StyledFeaturedButton icon={faStarSolid} size="lg" onClick={onRemove} />}
    {!isFeatured && <StyledFeaturedButton icon={faStarRegular} size="lg" onClick={onAdd} />}
  </Fragment>
);

export default FeaturedButton;
