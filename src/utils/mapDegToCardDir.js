import { cardDirMapRu as cardDirMap } from '../config/weather/wind';

export default function mapDegToCardDir(deg) {
  if (deg === undefined || deg === null || Number.isNaN(deg)) return null;

  if (deg >= 360) {
    const rate = Math.floor(deg / 360);
    // eslint-disable-next-line no-param-reassign
    deg = deg / rate - 360;
  }

  if ((deg >= 0 && deg <= 11.25) || (deg >= 348.75 && deg <= 360)) return cardDirMap.N;

  if (deg >= 11.25 && deg <= 33.75) return cardDirMap.NNE;

  if (deg >= 33.75 && deg <= 56.25) return cardDirMap.NE;

  if (deg >= 56.25 && deg <= 78.75) return cardDirMap.ENE;

  if (deg >= 78.75 && deg <= 101.25) return cardDirMap.E;

  if (deg >= 101.25 && deg <= 123.75) return cardDirMap.ESE;

  if (deg >= 123.75 && deg <= 146.25) return cardDirMap.SE;

  if (deg >= 146.25 && deg <= 168.75) return cardDirMap.SSE;

  if (deg >= 168.75 && deg <= 191.25) return cardDirMap.S;

  if (deg >= 191.25 && deg <= 213.75) return cardDirMap.SSW;

  if (deg >= 213.75 && deg <= 236.25) return cardDirMap.SW;

  if (deg >= 236.25 && deg <= 258.75) return cardDirMap.WSW;

  if (deg >= 258.75 && deg <= 281.25) return cardDirMap.W;

  if (deg >= 281.25 && deg <= 303.75) return cardDirMap.WNW;

  if (deg >= 303.75 && deg <= 326.25) return cardDirMap.NW;

  if (deg >= 326.25 && deg <= 348.75) return cardDirMap.NNW;

  return null;
}
