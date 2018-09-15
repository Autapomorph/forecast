import React from 'react';

import { StyledWeatherIcon } from './styles';

const WeatherIcon = ({
  tag = 'i',
  icon,
  wind = false,
  fixedWidth,
  flip,
  rotate,
  size,
  className,
}) => {
  const classNames = ['wi'];
  if (wind || /^wi-/i.test(icon)) {
    classNames.push(icon);
  } else {
    classNames.push(`wi-${icon}`);
  }

  if (wind) classNames.push(`wi-wind`);
  if (size) classNames.push(`wi-size-${size}`);
  if (fixedWidth) classNames.push('wi-fw');
  if (flip) classNames.push(`wi-flip-${flip}`);
  if (rotate) classNames.push(`wi-rotate-${rotate}`);
  if (className) classNames.push(className);

  let fontSize;
  switch (size) {
    case 'lg':
      fontSize = '1.33333333em';
      break;
    case '2x':
      fontSize = '2em';
      break;
    case '3x':
      fontSize = '3em';
      break;
    case '4x':
      fontSize = '4em';
      break;
    case '5x':
      fontSize = '5em';
      break;
    default:
      fontSize = 'normal';
      break;
  }

  return <StyledWeatherIcon as={tag} className={classNames.join(' ')} size={fontSize} />;
};

export default WeatherIcon;
