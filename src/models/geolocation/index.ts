export interface ICoords extends Partial<Coordinates> {
  latitude: number;
  longitude: number;
}

export interface IPosition {
  coords: ICoords;
}
