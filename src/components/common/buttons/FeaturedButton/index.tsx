import React, { Fragment } from 'react';
import { faStar as faStarSolid } from '@fortawesome/free-solid-svg-icons';
import { faStar as faStarRegular } from '@fortawesome/free-regular-svg-icons';
import { SizeProp } from '@fortawesome/fontawesome-svg-core';

import { StyledFeaturedButton } from './styles';

interface IFeaturedButtonProps {
  isFeatured: boolean;
  size?: SizeProp;
  onAdd?: () => void;
  onRemove?: () => void;
}

const FeaturedButton: React.FC<IFeaturedButtonProps> = ({
  isFeatured = false,
  size = 'lg',
  onAdd = () => {},
  onRemove = () => {},
  ...props
}): React.ReactElement => (
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
