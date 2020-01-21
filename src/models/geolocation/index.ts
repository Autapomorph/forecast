export type Coords = {
  latitude: number;
  longitude: number;
} & Partial<Coordinates>;

export type IPGeolocationResponseObject = Coords & {
  message?: string;
};
