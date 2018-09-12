import React, { Fragment } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import faStarSolid from '@fortawesome/fontawesome-free-solid/faStar';
import faStarRegular from '@fortawesome/fontawesome-free-regular/faStar';

const FeaturedButton = ({ isFeatured = false, onAdd = () => {}, onRemove = () => {} }) => (
  <Fragment>
    {isFeatured && (
      <button type="button" onClick={onRemove}>
        <FontAwesomeIcon icon={faStarSolid} />
      </button>
    )}
    {!isFeatured && (
      <button type="button" onClick={onAdd}>
        <FontAwesomeIcon icon={faStarRegular} />
      </button>
    )}
  </Fragment>
);

export default FeaturedButton;
