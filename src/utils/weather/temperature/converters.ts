function checkDegrees(degrees: number): void {
  if (Number.isNaN(degrees)) {
    throw new TypeError('`degrees` param is not a number');
  }
}

export function kelvinToCelsius(degrees: number): number {
  checkDegrees(degrees);
  return Math.round(degrees - 273.15);
}

export function kelvinToFahrenheit(degrees: number): number {
  checkDegrees(degrees);
  return Math.round(degrees * 1.8 - 459.67);
}

export function fahrenheitToKelvin(degrees: number): number {
  checkDegrees(degrees);
  return Math.round((degrees + 459.67) * (5 / 9));
}

export function fahrenheitToCelsius(degrees: number): number {
  checkDegrees(degrees);
  return Math.round((degrees - 32) / 1.8);
}

export function celsiusToKelvin(degrees: number): number {
  checkDegrees(degrees);
  return Math.round(degrees + 273.15);
}

export function celsiusToFahrenheit(degrees: number): number {
  checkDegrees(degrees);
  return Math.round(degrees * 1.8 + 32);
}
