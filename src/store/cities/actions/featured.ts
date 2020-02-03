import { City } from 'models';
import { Actions, Types } from '../types';

export const addToFeatured = (city: City): Actions => ({
  type: Types.FEATURED_ADD,
  payload: city,
});

export const removeFromFeatured = (cityId: City['id']): Actions => ({
  type: Types.FEATURED_REMOVE,
  payload: cityId,
});

export const clearFeatured = (): Actions => ({
  type: Types.FEATURED_CLEAR,
});

export const reorderFeatured = (prevIndex: number, nextIndex: number): Actions => ({
  type: Types.FEATURED_REORDER,
  payload: {
    prevIndex,
    nextIndex,
  },
});
