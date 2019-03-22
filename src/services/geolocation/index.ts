import { IPAPI_API } from '../../config/geolocation';
import { isProd } from '../../utils';
import { IPosition } from '../../models';

export default class GeolocationService {
  public static fetchGeolocation = (): Promise<Position> =>
    new Promise((resolve, reject) => {
      navigator.geolocation.getCurrentPosition(resolve, ({ code }: PositionError) => {
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
      });
    });

  public static fetchGeolocationByIP = async (): Promise<IPosition> => {
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
      coords: {
        latitude: geolocationData.latitude,
        longitude: geolocationData.longitude,
      },
    };
  };
}
