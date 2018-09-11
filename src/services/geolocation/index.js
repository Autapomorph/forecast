import { IPAPI_API } from '../../config/geolocation';

export default class GeolocationService {
  static fetchGeolocation = (successCallback = () => {}, errorCallback = () => {}) => {
    navigator.geolocation.getCurrentPosition(
      geoData => {
        successCallback(geoData);
      },
      error => {
        errorCallback(error);
      },
    );
  };

  static fetchGeolocationByIP = async () => {
    const response = await fetch(IPAPI_API);

    if (!response.ok) {
      throw new Error('IP geolocation failed');
    }

    const geolocationData = await response.json();

    if (geolocationData.error) {
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
