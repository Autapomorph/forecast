function checkDegrees(degrees: number): void {
  if (Number.isNaN(degrees)) {
    throw new TypeError('`degrees` param is not a number');
  }

  if (degrees < 0) {
    throw new RangeError('`degrees` param is below zero');
  }
}

export default function generateWindIcon(degrees: number, towards = false): string {
  checkDegrees(degrees);

  const formattedDegrees: number = Math.round(degrees);
  const weatherIcon: string = towards
    ? `towards-${formattedDegrees}-deg`
    : `from-${formattedDegrees}-deg`;

  return weatherIcon;
}
