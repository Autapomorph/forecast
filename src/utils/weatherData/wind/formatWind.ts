import mapDegToCardDir from './mapDegToCardDir';
import generateWindIcon from './generateWindIcon';
import { IWindFormat } from '../../../models';

interface IWindFormatProps {
  speed: number;
  bearing: number;
}

export default function formatWind({ speed, bearing = 0 }: IWindFormatProps): IWindFormat {
  const windIcon = generateWindIcon(bearing);
  const windCardDir = mapDegToCardDir(bearing);
  const windSpeed = Math.round(speed);

  return {
    windBearing: bearing,
    windSpeed,
    windCardDir,
    windIcon,
  };
}
