module.exports = {
  extends: [
    'stylelint-config-standard',
    'stylelint-config-styled-components',
    'stylelint-prettier/recommended',
  ],
  rules: {
    'value-keyword-case': null,
    'declaration-empty-line-before': 'never',
  },
};
