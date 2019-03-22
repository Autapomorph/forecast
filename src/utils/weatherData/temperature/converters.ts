export function kelvinToCelsius(degrees: number): number | null {
  if (!degrees || Number.isNaN(degrees)) {
    return null;
  }

  return Math.round(degrees - 273.15);
}

export function kelvinToFahrenheit(degrees: number): number | null {
  if (!degrees || Number.isNaN(degrees)) {
    return null;
  }

  return Math.round(degrees * 1.8 - 459.67);
}

export function fahrenheitToKelvin(degrees: number): number | null {
  if (!degrees || Number.isNaN(degrees)) {
    return null;
  }

  return Math.round((degrees + 459.67) * (5 / 9));
}

export function fahrenheitToCelsius(degrees: number): number | null {
  if (!degrees || Number.isNaN(degrees)) {
    return null;
  }

  return Math.round((degrees - 32) / 1.8);
}

export function celsiusToKelvin(degrees: number): number | null {
  if (!degrees || Number.isNaN(degrees)) {
    return null;
  }

  return Math.round(degrees + 273.15);
}

export function celsiusToFahrenheit(degrees: number): number | null {
  if (!degrees || Number.isNaN(degrees)) {
    return null;
  }

  return Math.round(degrees * 1.8 + 32);
}
