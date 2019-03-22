export default function generateWindIcon(windDir: number, towards: boolean = false): string {
  if (
    windDir === null ||
    windDir === undefined ||
    typeof windDir !== 'number' ||
    Number.isNaN(windDir)
  ) {
    throw new Error('Invalid wind direction');
  }

  const formattedWindDir: number = Math.round(windDir);
  const weatherIcon: string = towards
    ? `towards-${formattedWindDir}-deg`
    : `from-${formattedWindDir}-deg`;

  return weatherIcon;
}
