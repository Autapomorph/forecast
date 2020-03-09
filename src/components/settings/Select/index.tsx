import React from 'react';
import ReactSelect, { Props as ReactSelectProps } from 'react-select';
import { useTheme } from 'styled-components/macro';

import { Theme } from 'models';

import getStyles from './styles';

type Props = Pick<
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  ReactSelectProps<{ label: string; value: any }>,
  'options' | 'value' | 'onChange'
>;

const Select = ({ options, value, onChange }: Props): React.ReactElement => {
  const theme = useTheme() as Theme;
  const styles = getStyles(theme);

  return (
    <ReactSelect
      options={options}
      value={value}
      isSearchable={false}
      onChange={onChange}
      styles={styles}
    />
  );
};

export default Select;
