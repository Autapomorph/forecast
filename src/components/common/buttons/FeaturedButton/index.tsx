import React from 'react';
import { faStar as faStarSolid } from '@fortawesome/free-solid-svg-icons';
import { faStar as faStarRegular } from '@fortawesome/free-regular-svg-icons';
import { SizeProp } from '@fortawesome/fontawesome-svg-core';

import * as S from './styles';

type Props = {
  isFeatured: boolean;
  onAdd?: () => void;
  onRemove?: () => void;
  size?: SizeProp;
};

const FeaturedButton: React.FC<Props> = ({
  isFeatured = false,
  size,
  onAdd,
  onRemove,
  ...props
}): React.ReactElement => (
  <>
    {isFeatured && (
      <S.FeaturedButton icon={faStarSolid} size={size} onClick={onRemove} {...props} />
    )}

    {!isFeatured && (
      <S.FeaturedButton icon={faStarRegular} size={size} onClick={onAdd} {...props} />
    )}
  </>
);

export default FeaturedButton;
