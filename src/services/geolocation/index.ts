import { Coords, IPGeolocationResponseObject } from 'models';
import { IPDATA_API } from 'config/geolocation';
import { isProd } from 'utils';

export default class GeolocationService {
  public static fetchGeolocation = (): Promise<Coords> =>
    new Promise((resolve, reject) => {
      const onSuccess: PositionCallback = (position): void =>
        resolve({
          latitude: position.coords.latitude,
          longitude: position.coords.longitude,
        });

      const onError: PositionErrorCallback = ({ code }: PositionError): void => {
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

      navigator.geolocation.getCurrentPosition(onSuccess, onError);
    });

  public static fetchGeolocationByIP = async (): Promise<Coords> => {
    const response = await fetch(IPDATA_API);

    if (!response.ok) {
      throw new Error('messages.errors.geolocation.geoIPFetchFailed');
    }

    const geolocationData: IPGeolocationResponseObject = await response.json();

    if (geolocationData.message) {
      if (isProd) throw new Error('messages.errors.geolocation.geoIPFetchFailed');
      throw new Error(geolocationData.message);
    }

    return {
      latitude: geolocationData.latitude,
      longitude: geolocationData.longitude,
    };
  };
}
