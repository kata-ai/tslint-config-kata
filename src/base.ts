import react from './config/react';
import base from './config/base';

import getRuleDirectory from './utils/getRuleDirectory';

module.exports = {
  rulesDirectory: [
    './rules',
    getRuleDirectory('tslint-eslint-rules', 'dist/rules'),
    getRuleDirectory('tslint-consistent-codestyle'),
    getRuleDirectory('tslint-microsoft-contrib')
  ],
  extends: ['tslint-react', 'tslint-config-prettier'],
  rules: {
    ...base.rules,
    ...react.rules
  }
};
