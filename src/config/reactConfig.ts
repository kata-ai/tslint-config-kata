// tslint-react
// Lint rules related to React & JSX for TSLint.
// Reference https://github.com/palantir/tslint-react

export default {
  rules: {
    'jsx-alignment': true,
    'jsx-ban-props': false,
    'jsx-boolean-value': [true, 'never'],
    'jsx-curly-spacing': ['never'],
    'jsx-equals-spacing': ['never'],
    'jsx-key': true,
    'jsx-no-bind': true,
    'jsx-no-lambda': false,
    'jsx-no-multiline-js': false,
    'jsx-no-string-ref': true,
    'jsx-self-close': true,
    'jsx-use-translation-function': false,
    'jsx-wrap-multiline': true,

    // Overrides from base config
    'function-name': [
      true,
      {
        'function-regex': /^[\w\d]+$/,
        'method-regex': /^[\w\d]+$/,
        'private-method-regex': /^[\w\d]+$/,
        'protected-method-regex': /^[\w\d]+$/,
        'static-method-regex': /^[\w\d]+$/
      } // 23.1
    ],
    'interface-name': [true, 'never-prefix'],
    'ter-indent': [true, 2, { SwitchCase: 1 }], // 19.1 exception
    'variable-name': [true, 'ban-keywords'] // 23.2 exception
  }
};
