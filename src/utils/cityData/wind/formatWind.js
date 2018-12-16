import mapDegToCardDir from './mapDegToCardDir';

import generateWindIcon from './generateWindIcon';

export default function formatWind({ wind }) {
  const windDeg = (wind && wind.deg) || 0;
  const windSpeed = wind && Math.round(wind.speed);
  const windCardDir = mapDegToCardDir(windDeg);

  const windIcon = generateWindIcon(windDeg);

  return {
    windDeg,
    windSpeed,
    windCardDir,
    windIcon,
  };
}
