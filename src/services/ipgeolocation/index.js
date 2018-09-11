import { IPAPI_API } from '../../config/ipgeolocation';

export default class IPGeolocationService {
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
