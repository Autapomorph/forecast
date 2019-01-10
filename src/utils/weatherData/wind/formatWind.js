import mapDegToCardDir from './mapDegToCardDir';

import generateWindIcon from './generateWindIcon';

export default function formatWind({ speed, bearing = 0 }) {
  const windIcon = generateWindIcon(bearing);
  const windCardDir = mapDegToCardDir(bearing);
  const windSpeed = Math.round(speed);

  return {
    windBearing: bearing,
    windSpeed,
    windCardDir,
    windIcon,
  };
}
