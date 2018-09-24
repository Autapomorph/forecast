import { pascalToHg } from './pressureConverter';

export default function formatPressure({ pressure, pressureSeaLevel, pressureGrindLevel }) {
  return {
    pressure: pascalToHg(pressure),
    pressureSeaLevel: pascalToHg(pressureSeaLevel),
    pressureGrindLevel: pascalToHg(pressureGrindLevel),
  };
}
