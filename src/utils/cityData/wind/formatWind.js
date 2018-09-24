import mapDegToCardDir from './mapDegToCardDir';

function generateWindIcon(windDir, towards = false) {
  if (
    windDir === null ||
    windDir === undefined ||
    typeof windDir !== 'number' ||
    Number.isNaN(windDir)
  ) {
    throw new Error('Invalid wind direction');
  }

  const formattedWindDir = Math.round(windDir);
  const weatherIcon = towards ? `towards-${formattedWindDir}-deg` : `from-${formattedWindDir}-deg`;

  return weatherIcon;
}

export default function formatWind({ wind }) {
  const windDeg = (wind && wind.deg) || 0;
  const windSpeed = wind && Math.round(wind.speed);
  const windCardDir = windDeg && mapDegToCardDir(windDeg);
  const windIcon = generateWindIcon(windDeg);

  return {
    windDeg,
    windSpeed,
    windCardDir,
    windIcon,
  };
}
