/* eslint-disable import/named */
import { ICoords } from '../../models';

// eslint-disable-next-line import/prefer-default-export
export interface GeolocationState {
  readonly data: ICoords | null;
  readonly loading: boolean;
  readonly errorMessage: string | null;
}
