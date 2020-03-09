module.exports = {
  env: {
    browser: true,
    jest: true,
  },
  parser: '@typescript-eslint/parser',
  extends: [
    'react-app',
    'airbnb',
    'plugin:@typescript-eslint/recommended',
    'plugin:import/typescript',
    'plugin:prettier/recommended',
    'prettier/@typescript-eslint',
    'prettier/react',
    'jest-enzyme',
  ],
  rules: {
    'no-prototype-builtins': 'off',
    'class-methods-use-this': 'off',
    'spaced-comment': ['error', 'always', { markers: ['/'] }],
    'import/extensions': 'off',
    'import/no-named-as-default': 'off',
    'import/prefer-default-export': 'off',
    'import/no-extraneous-dependencies': ['error', { devDependencies: true }],
    'react/prop-types': 'off',
    'react/jsx-filename-extension': 'off',
    'react/jsx-props-no-spreading': 'off',
    'react/jsx-one-expression-per-line': 'off',
    '@typescript-eslint/ban-ts-ignore': 'off',
    '@typescript-eslint/explicit-function-return-type': 'off',
  },
  overrides: [
    {
      files: ['*.ts', '*.tsx'],
      rules: {
        'no-dupe-class-members': 'off',
        'no-useless-constructor': 'off',
        '@typescript-eslint/no-useless-constructor': 'error',
        '@typescript-eslint/explicit-function-return-type': ['error', { allowExpressions: true }],
        '@typescript-eslint/no-empty-function': [
          'error',
          { allow: ['protected-constructors', 'private-constructors'] },
        ],
      },
    },
  ],
  settings: {
    'import/resolver': {
      node: {
        paths: ['src'],
      },
    },
  },
};
