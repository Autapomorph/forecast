export default function generateWindIcon(windDir, towards = false) {
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
