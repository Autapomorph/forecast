import { IWindFormat } from 'models';
import mapDegToCardDir from './mapDegToCardDir';
import generateWindIcon from './generateWindIcon';

interface IWindFormatProps {
  speed: number;
  bearing: number;
}

export default function formatWind({
  speed: windSpeed,
  bearing = 0,
}: IWindFormatProps): IWindFormat {
  const icon = generateWindIcon(bearing);
  const cardDir = mapDegToCardDir(bearing);
  const speed = Math.round(windSpeed);

  return {
    bearing,
    speed,
    cardDir,
    icon,
  };
}
