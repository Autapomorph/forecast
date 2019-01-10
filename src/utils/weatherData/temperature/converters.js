export function kelvinToCelsius(degrees) {
  if (!degrees || Number.isNaN(degrees)) {
    return null;
  }

  return Math.round(degrees - 273.15);
}

export function kelvinToFahrenheit(degrees) {
  if (!degrees || Number.isNaN(degrees)) {
    return null;
  }

  return Math.round(degrees * 1.8 - 459.67);
}

export function fahrenheitToKelvin(degrees) {
  if (!degrees || Number.isNaN(degrees)) {
    return null;
  }

  return Math.round((degrees + 459.67) * (5 / 9));
}

export function fahrenheitToCelsius(degrees) {
  if (!degrees || Number.isNaN(degrees)) {
    return null;
  }

  return Math.round((degrees - 32) / 1.8);
}

export function celsiusToKelvin(degrees) {
  if (!degrees || Number.isNaN(degrees)) {
    return null;
  }

  return Math.round(degrees + 273.15);
}

export function celsiusToFahrenheit(degrees) {
  if (!degrees || Number.isNaN(degrees)) {
    return null;
  }

  return Math.round(degrees * 1.8 + 32);
}
