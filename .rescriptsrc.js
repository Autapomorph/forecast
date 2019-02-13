module.exports = [
  ['use-babel-config', 'babel.config.js'],
  {
    jest: config => {
      // eslint-disable-next-line no-param-reassign
      config.transform['^.+\\.(js|jsx|ts|tsx)$'] = 'babel-jest';
      return config;
    },
  },
];
