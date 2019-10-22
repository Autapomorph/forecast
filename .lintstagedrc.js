const path = require('path');
const micromatch = require('micromatch');

module.exports = {
  'src/**/*.{js,jsx,ts,tsx}': filenames => {
    const match = micromatch.not(filenames, ['src/serviceWorker.{js,ts}']).join(' ');

    return [
      `prettier --write ${match}`,
      `stylelint ${match}`,
      `eslint --max-warnings=0 ${match}`,
      `git add ${match}`,
    ];
  },

  'src/**/*.{css,scss,sass,less}': ['prettier --write', 'stylelint --fix', 'git add'],

  'src/**/*.{json,md}': [`prettier --write`, `git add`],
};
