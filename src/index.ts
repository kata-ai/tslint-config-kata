import reactConfig from './config/reactConfig';
import baseConfig from './config/baseConfig';

export const base = {
  extends: ['tslint-config-airbnb'],
  rules: {
    ...baseConfig.rules
  }
};

export const react = {
  extends: ['tslint-config-airbnb', 'tslint-react'],
  rules: {
    ...baseConfig.rules,
    ...reactConfig.rules
  }
};
