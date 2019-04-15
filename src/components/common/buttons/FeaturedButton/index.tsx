import React, { Fragment } from 'react';
import { faStar as faStarSolid } from '@fortawesome/free-solid-svg-icons';
import { faStar as faStarRegular } from '@fortawesome/free-regular-svg-icons';
import { Props as FontAwesomeIconProps } from '@fortawesome/react-fontawesome';

import { StyledFeaturedButton } from './styles';

interface IFeaturedButtonProps extends Partial<FontAwesomeIconProps> {
  isFeatured: boolean;
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
      <Fragment>
        {
          // @ts-ignore
          <StyledFeaturedButton icon={faStarSolid} size={size} onClick={onRemove} {...props} />
        }
      </Fragment>
    )}

    {!isFeatured && (
      <Fragment>
        {
          // @ts-ignore
          <StyledFeaturedButton icon={faStarRegular} size={size} onClick={onAdd} {...props} />
        }
      </Fragment>
    )}
  </Fragment>
);

export default FeaturedButton;
