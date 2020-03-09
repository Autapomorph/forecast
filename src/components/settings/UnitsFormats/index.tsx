import React from 'react';
import { connect, ConnectedProps } from 'react-redux';
import { useTranslation } from 'react-i18next';

import { UnitsFormat } from 'models';
import { RootState } from 'store/types';
import { getCurrentUnitsFormat } from 'store/rootSelectors';
import { changeUnitsFormat } from 'store/settings/actions';
import { availableUnitsFormats } from 'config/unitsFormats';
import Select from 'components/settings/Select';

import * as S from 'components/settings/Modal/styles';

type Props = ConnectedProps<typeof connector>;

export const UnitsFormats = ({
  selectedUnitsFormat,
  _changeUnitsFormat,
}: Props): React.ReactElement => {
  const { t } = useTranslation();

  const options = availableUnitsFormats.map(uf => ({
    value: uf,
    label: t(`settings.unitsFormats.type.${uf}`),
  }));
  const defaultValue = {
    value: selectedUnitsFormat,
    label: t(`settings.unitsFormats.type.${selectedUnitsFormat}`),
  };

  return (
    <S.SettingContainer>
      <S.SettingTitle>{t('settings.unitsFormats.title')}</S.SettingTitle>

      <S.SettingContent>
        <Select
          value={defaultValue}
          options={options}
          onChange={selected => {
            const { value } = selected as { value: UnitsFormat; label: string };
            if (value !== selectedUnitsFormat) {
              _changeUnitsFormat(value);
            }
          }}
        />
      </S.SettingContent>
    </S.SettingContainer>
  );
};

// eslint-disable-next-line @typescript-eslint/explicit-function-return-type
const mapState = (state: RootState) => ({
  selectedUnitsFormat: getCurrentUnitsFormat(state),
});

const mapDispatch = {
  _changeUnitsFormat: changeUnitsFormat,
};

const connector = connect(mapState, mapDispatch);
export default connector(UnitsFormats);
