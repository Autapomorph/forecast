import { Styles } from 'react-select';

import { Theme } from 'models';

const getStyles = (theme: Theme): Partial<Styles> => ({
  control: (provided, state) => ({
    ...provided,
    borderColor: state.menuIsOpen ? theme.borderHoverColor : theme.borderColor,
    boxShadow: state.menuIsOpen ? `0 0 0 1px ${theme.borderHoverColor}` : 'none',
    backgroundColor: theme.elementBg,
    lineHeight: 1.3,
    cursor: 'pointer',
    ':hover': {
      borderColor: theme.borderHoverColor,
    },
  }),
  dropdownIndicator: (provided, state) => ({
    ...provided,
    color: state.selectProps.menuIsOpen
      ? theme.interactiveActiveElementTextColor
      : theme.interactiveElementTextColor,
    ':hover': {
      color: theme.altTextColor,
    },
  }),
  singleValue: provided => ({
    ...provided,
    color: theme.altTextColor,
  }),
  input: provided => ({
    ...provided,
    color: theme.altTextColor,
  }),
  menu: provided => ({
    ...provided,
    marginTop: '4px',
    marginBottom: '4px',
    border: `1px solid ${theme.borderColor}`,
    backgroundColor: theme.elementBg,
    color: theme.altTextColor,
  }),
  option: (provided, state) => ({
    ...provided,
    backgroundColor: state.isSelected ? theme.accentElementBg : theme.elementBg,
    color: state.isSelected ? theme.accentElementTextColor : theme.altTextColor,
    boxShadow: 'none',
    outline: 'none',
    cursor: 'pointer',
    ':hover': {
      backgroundColor: state.isSelected ? theme.accentElementBg : theme.elementHoverBg,
    },
    ':active': {
      backgroundColor: state.isSelected ? theme.accentElementBg : theme.elementActiveBg,
    },
    ':hover:active': {
      backgroundColor: state.isSelected ? theme.accentElementBg : theme.elementActiveBg,
    },
  }),
});

export default getStyles;
