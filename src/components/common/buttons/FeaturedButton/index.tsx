import React from 'react';
import { faStar as faStarSolid } from '@fortawesome/free-solid-svg-icons';
import { faStar as faStarRegular } from '@fortawesome/free-regular-svg-icons';
import { Props as FontAwesomeIconProps } from '@fortawesome/react-fontawesome';

import { StyledFeaturedButton } from './styles';

type Props = {
  isFeatured: boolean;
  onAdd?: () => void;
  onRemove?: () => void;
} & Partial<FontAwesomeIconProps>;

const FeaturedButton: React.FC<Props> = ({
  isFeatured = false,
  size = 'lg',
  onAdd = () => {},
  onRemove = () => {},
  ...props
}): React.ReactElement => (
  <>
    {isFeatured && (
      <StyledFeaturedButton icon={faStarSolid} size={size} onClick={onRemove} {...props} />
    )}

    {!isFeatured && (
      <StyledFeaturedButton icon={faStarRegular} size={size} onClick={onAdd} {...props} />
    )}
  </>
);

export default FeaturedButton;
