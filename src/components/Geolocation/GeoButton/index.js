import React from 'react';

const GeoButton = ({ disabled, onClick }) => (
  <button type="button" disabled={disabled} onClick={onClick}>
    Мое местоположение
  </button>
);

export default GeoButton;
