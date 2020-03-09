import React from 'react';

import * as S from './styles';

type Props = {
  icon: string;
  wind?: boolean;
  fixedWidth?: boolean;
  flip?: 'horizontal' | 'vertical' | false;
  rotate?: number | false;
  className?: string;
  style?: React.CSSProperties;
};

const WeatherIcon = ({
  icon,
  wind = false,
  fixedWidth = false,
  flip = false,
  rotate = false,
  className = '',
  style,
}: Props): React.ReactElement => {
  const classNames = ['wi'];
  if (wind || /^wi-/i.test(icon)) {
    classNames.push(icon);
  } else {
    classNames.push(`wi-${icon}`);
  }

  if (wind) classNames.push(`wi-wind`);
  if (fixedWidth) classNames.push('wi-fw');
  if (flip) classNames.push(`wi-flip-${flip}`);
  if (rotate) classNames.push(`wi-rotate-${rotate}`);
  if (className) classNames.push(className);

  return <S.WeatherIcon className={classNames.join(' ')} style={style} />;
};

export default WeatherIcon;
