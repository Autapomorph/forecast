import React from 'react';

import * as S from './styles';

type Props = {
  tag?: React.ElementType;
  icon: string;
  wind?: boolean;
  fixedWidth?: boolean;
  flip?: boolean;
  rotate?: boolean;
  size?: string;
  className?: string;
};

const WeatherIcon: React.FC<Props> = ({
  tag = 'i',
  icon,
  wind = false,
  fixedWidth = false,
  flip = false,
  rotate = false,
  size = '1em',
  className = '',
}): React.ReactElement => {
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

  return <S.WeatherIcon as={tag} className={classNames.join(' ')} size={fontSize} />;
};

export default WeatherIcon;
