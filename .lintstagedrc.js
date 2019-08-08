const path = require('path');
const micromatch = require('micromatch');

module.exports = {
  'src/**/*.{js,jsx,ts,tsx}': filenames => {
    const match = micromatch.not(filenames, ['src/serviceWorker.{js,ts}']);

    return match
      .map(file => [
        `prettier --write ${file}`,
        `stylelint ${file}`,
        `eslint --max-warnings=0 ${file}`,
        `git add ${file}`,
      ])
      .join(' ');
  },

  'src/**/*.{css,scss,sass,less}': filenames => {
    return filenames
      .map(file => [
        `prettier --write ${file}`,
        `stylelint --fix --config .stylelintrc.css.js ${file}`,
        `git add ${file}`,
      ])
      .join(' ');
  },

  'src/**/*.{json,md}': filenames => {
    return filenames.map(file => [`prettier --write ${file}`, `git add ${file}`]).join(' ');
  },
};
