import { IPAPI_API } from '../../config/geolocation';
import { isProd } from '../../utils';
import { ICoords } from '../../models';

export default class GeolocationService {
  public static fetchGeolocation = (): Promise<ICoords> =>
    new Promise((resolve, reject) => {
      const successCb: PositionCallback = (position): void =>
        resolve({
          latitude: position.coords.latitude,
          longitude: position.coords.longitude,
        });

      const errorCb: PositionErrorCallback = ({ code }: PositionError): void => {
        switch (code) {
          case 1:
            return reject(new Error('messages.errors.geolocation.permissionDenied'));
          case 2:
            return reject(new Error('messages.errors.geolocation.positionUnavailable'));
          case 3:
            return reject(new Error('messages.errors.geolocation.timeout'));
          default:
            return reject(new Error('messages.errors.geolocation.positionUnavailable'));
        }
      };

      navigator.geolocation.getCurrentPosition(successCb, errorCb);
    });

  public static fetchGeolocationByIP = async (): Promise<ICoords> => {
    const response = await fetch(IPAPI_API);

    if (!response.ok) {
      throw new Error('messages.errors.geolocation.geoIPFetchFailed');
    }

    const geolocationData = await response.json();

    if (geolocationData.error) {
      if (isProd) throw new Error('messages.errors.geolocation.geoIPFetchFailed');
      throw new Error(geolocationData.reason);
    }

    return {
      latitude: geolocationData.latitude,
      longitude: geolocationData.longitude,
    };
  };
}
