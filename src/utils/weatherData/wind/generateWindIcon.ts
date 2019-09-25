export default function generateWindIcon(windDir: number, towards = false): string {
  if (Number.isNaN(windDir)) {
    throw new Error('Invalid wind direction');
  }

  const formattedWindDir: number = Math.round(windDir);
  const weatherIcon: string = towards
    ? `towards-${formattedWindDir}-deg`
    : `from-${formattedWindDir}-deg`;

  return weatherIcon;
}
