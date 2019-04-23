import { WindCardDir as D } from 'models/weather/wind';

export default function mapDegToCardDir(deg: number): D {
  if (Number.isNaN(deg)) {
    throw new Error('"deg" param is not a number');
  }

  if (deg >= 360) {
    const rate = Math.floor(deg / 360);
    // eslint-disable-next-line no-param-reassign
    deg = deg / rate - 360;
  }

  if ((deg >= 0 && deg <= 11.25) || (deg >= 348.75 && deg <= 360)) return D.N;

  if (deg >= 11.25 && deg <= 33.75) return D.NNE;

  if (deg >= 33.75 && deg <= 56.25) return D.NE;

  if (deg >= 56.25 && deg <= 78.75) return D.ENE;

  if (deg >= 78.75 && deg <= 101.25) return D.E;

  if (deg >= 101.25 && deg <= 123.75) return D.ESE;

  if (deg >= 123.75 && deg <= 146.25) return D.SE;

  if (deg >= 146.25 && deg <= 168.75) return D.SSE;

  if (deg >= 168.75 && deg <= 191.25) return D.S;

  if (deg >= 191.25 && deg <= 213.75) return D.SSW;

  if (deg >= 213.75 && deg <= 236.25) return D.SW;

  if (deg >= 236.25 && deg <= 258.75) return D.WSW;

  if (deg >= 258.75 && deg <= 281.25) return D.W;

  if (deg >= 281.25 && deg <= 303.75) return D.WNW;

  if (deg >= 303.75 && deg <= 326.25) return D.NW;

  if (deg >= 326.25 && deg <= 348.75) return D.NNW;

  throw new Error('Invalid wind direction');
}
