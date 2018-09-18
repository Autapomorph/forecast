import cardDirMap from '../../config/weather/wind';
import store from '../../store';
import { getCurrentLanguage } from '../../store/rootSelectors';

export default function mapDegToCardDir(deg) {
  if (deg === undefined || deg === null || Number.isNaN(deg)) return null;

  if (deg >= 360) {
    const rate = Math.floor(deg / 360);
    // eslint-disable-next-line no-param-reassign
    deg = deg / rate - 360;
  }

  const currentLanguage = getCurrentLanguage(store.getState());
  const cardDirMapLocalized = cardDirMap[currentLanguage];

  if ((deg >= 0 && deg <= 11.25) || (deg >= 348.75 && deg <= 360)) return cardDirMapLocalized.N;

  if (deg >= 11.25 && deg <= 33.75) return cardDirMapLocalized.NNE;

  if (deg >= 33.75 && deg <= 56.25) return cardDirMapLocalized.NE;

  if (deg >= 56.25 && deg <= 78.75) return cardDirMapLocalized.ENE;

  if (deg >= 78.75 && deg <= 101.25) return cardDirMapLocalized.E;

  if (deg >= 101.25 && deg <= 123.75) return cardDirMapLocalized.ESE;

  if (deg >= 123.75 && deg <= 146.25) return cardDirMapLocalized.SE;

  if (deg >= 146.25 && deg <= 168.75) return cardDirMapLocalized.SSE;

  if (deg >= 168.75 && deg <= 191.25) return cardDirMapLocalized.S;

  if (deg >= 191.25 && deg <= 213.75) return cardDirMapLocalized.SSW;

  if (deg >= 213.75 && deg <= 236.25) return cardDirMapLocalized.SW;

  if (deg >= 236.25 && deg <= 258.75) return cardDirMapLocalized.WSW;

  if (deg >= 258.75 && deg <= 281.25) return cardDirMapLocalized.W;

  if (deg >= 281.25 && deg <= 303.75) return cardDirMapLocalized.WNW;

  if (deg >= 303.75 && deg <= 326.25) return cardDirMapLocalized.NW;

  if (deg >= 326.25 && deg <= 348.75) return cardDirMapLocalized.NNW;

  throw new Error('Invalid wind direction');
}
