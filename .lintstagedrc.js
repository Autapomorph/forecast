const path = require('path');
const micromatch = require('micromatch');

const getRelativePaths = absolutePaths =>
  absolutePaths.map(file => path.relative(process.cwd(), file));

module.exports = {
  'src/**/*.{js,jsx,ts,tsx}': absolutePaths => {
    const relativePaths = getRelativePaths(absolutePaths);
    const match = micromatch.not(relativePaths, ['src/serviceWorker.{js,ts}']);

    return match.map(file => [
      `prettier --write ${file}`,
      `stylelint ${file}`,
      `eslint --max-warnings=0 ${file}`,
      `git add ${file}`,
    ]);
  },

  'src/**/*.{css,scss,sass,less}': absolutePaths => {
    const relativePaths = getRelativePaths(absolutePaths);
    const match = micromatch(relativePaths);

    return match.map(file => [
      `prettier --write ${file}`,
      `stylelint --fix --config .stylelintrc.css.js ${file}`,
      `git add ${file}`,
    ]);
  },

  'src/**/*.{json,md}': absolutePaths => {
    const relativePaths = getRelativePaths(absolutePaths);
    const match = micromatch(relativePaths);

    return match.map(file => [`prettier --write ${file}`, `git add ${file}`]);
  },
};
