/* eslint-disable import/no-extraneous-dependencies, @typescript-eslint/no-var-requires */
const { CLIEngine } = require('eslint');

module.exports = {
  '*.{js,jsx,ts,tsx}': filenames => {
    const filenamesString = filenames.join(' ');
    const eslintMatch = filenames.filter(file => !new CLIEngine({}).isPathIgnored(file)).join(' ');

    return [
      `prettier --write ${filenamesString}`,
      `stylelint ${filenamesString}`,
      `eslint --max-warnings=0 ${eslintMatch}`,
      `git add ${filenamesString}`,
    ];
  },

  '*.{css,scss,sass,less}': ['prettier --write', 'stylelint --fix', 'git add'],

  '*.{json,md}': [`prettier --write`, `git add`],
};
