module.exports = {
  presets: ['react-app'],
  plugins: [
    'babel-plugin-styled-components',
    [
      'module-resolver',
      {
        alias: {
          '~': './src',
        },
      },
    ],
  ],
};
