export function kelvinToCelsius(degrees) {
  if (!degrees || Number.isNaN(degrees)) {
    return null;
  }

  return Math.round(degrees - 273);
}

export function kelvinToFahrenheit(degrees) {
  if (!degrees || Number.isNaN(degrees)) {
    return null;
  }

  return Math.round(1.8 * (degrees - 273) + 32);
}
