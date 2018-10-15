import React, { Fragment } from 'react';
import { faStar as faStarSolid } from '@fortawesome/free-solid-svg-icons';
import { faStar as faStarRegular } from '@fortawesome/free-regular-svg-icons';

import { StyledFeaturedButton } from './styles';

const FeaturedButton = ({
  isFeatured = false,
  size = 'lg',
  onAdd = () => {},
  onRemove = () => {},
  ...props
}) => (
  <Fragment>
    {isFeatured && (
      <StyledFeaturedButton icon={faStarSolid} size={size} onClick={onRemove} {...props} />
    )}
    {!isFeatured && (
      <StyledFeaturedButton icon={faStarRegular} size={size} onClick={onAdd} {...props} />
    )}
  </Fragment>
);

export default FeaturedButton;
