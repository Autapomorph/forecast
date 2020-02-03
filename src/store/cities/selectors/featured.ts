import { City } from 'models';
import { State } from '../types';

export const getFeatured = (state: State): City[] => state.featured;
export const getIsFeatured = (state: State): ((cityId: number) => boolean) => (
  cityId: number,
): boolean => state.featured.some(city => city.id === cityId);
