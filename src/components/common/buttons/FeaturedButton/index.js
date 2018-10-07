import React, { Fragment } from 'react';
import { faStar as faStarSolid } from '@fortawesome/free-solid-svg-icons';
import { faStar as faStarRegular } from '@fortawesome/free-regular-svg-icons';

import { StyledFeaturedButton } from './styles';

const FeaturedButton = ({ isFeatured = false, onAdd = () => {}, onRemove = () => {} }) => (
  <Fragment>
    {isFeatured && <StyledFeaturedButton icon={faStarSolid} size="lg" onClick={onRemove} />}
    {!isFeatured && <StyledFeaturedButton icon={faStarRegular} size="lg" onClick={onAdd} />}
  </Fragment>
);

export default FeaturedButton;
