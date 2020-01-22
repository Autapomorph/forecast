import Service from 'services';
import { Coords, IPGeolocationResponseObject } from 'models';
import { API_GEOIP } from 'config/geolocation';

class GeolocationService extends Service {
  public fetchGeolocation(): Promise<Coords> {
    return new Promise((resolve, reject) => {
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
  }

  public async fetchGeolocationByIP(): Promise<Coords> {
    let geolocationData: IPGeolocationResponseObject;
    const apiEndpoint = API_GEOIP;

    try {
      geolocationData = await this.fetch(apiEndpoint);
    } catch {
      throw new Error('messages.errors.geolocation.geoIPFetchFailed');
    }

    return {
      latitude: geolocationData.latitude,
      longitude: geolocationData.longitude,
    };
  }
}

export default new GeolocationService();
