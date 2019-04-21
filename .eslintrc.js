module.exports = {
  env: {
    browser: true,
    jest: true,
  },
  parser: '@typescript-eslint/parser',
  extends: [
    'airbnb',
    'plugin:@typescript-eslint/recommended',
    'plugin:import/typescript',
    'prettier',
    'prettier/react',
    'prettier/@typescript-eslint',
    'jest-enzyme',
  ],
  plugins: ['prettier'],
  rules: {
    'prettier/prettier': 'error',
    'import/no-extraneous-dependencies': ['error', { devDependencies: true }],
    'import/no-named-as-default': 'off',
    'react/jsx-one-expression-per-line': 'off',
    'react/jsx-filename-extension': 'off',
    'react/prop-types': 'off',
    '@typescript-eslint/interface-name-prefix': 'always',
    '@typescript-eslint/explicit-function-return-type': ['error', { allowExpressions: true }],
  },
  overrides: [
    {
      files: '**/*.d.ts',
      rules: {
        'no-useless-constructor': 'off',
        '@typescript-eslint/no-useless-constructor': 'error',
      },
    },
  ],
};
