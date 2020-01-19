import React from 'react';
import { useTranslation } from 'react-i18next';

import { UnitFormat } from 'models';

import * as S from './styles';

type Props = {
  unitsFormat: UnitFormat;
  checked: boolean;
  handleChange: (unitFormat: UnitFormat) => void;
};

const UnitsFormatsButton: React.FC<Props> = ({
  unitsFormat,
  checked,
  handleChange,
}): React.ReactElement => {
  const { t } = useTranslation();
  const tS = (key: string, options?: object): string => t(`settings.unitsFormats.${key}`, options);

  return (
    <S.SwitchButton checked={checked}>
      <S.Label>
        <S.RadioButton
          name="units-format"
          value={unitsFormat}
          checked={checked}
          onChange={() => handleChange(unitsFormat)}
        />

        <S.LabelText>{`${tS(`title.${unitsFormat}`)}`}</S.LabelText>
      </S.Label>
    </S.SwitchButton>
  );
};

export default UnitsFormatsButton;
