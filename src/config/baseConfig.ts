// Base Config
// Overrides default TSLint configs according to Kata Platform Development Standard.

export default {
  rules: {
    // extended rules for tslint-config-airbnb + kata exceptions
    align: [true, 'statements'], // 7.15 exception
    ban: false,
    eofline: false, // 19.5 exception
    forin: true,
    'import-name': false, // 23.6 exception
    'interface-name': [true, 'always-prefix'],
    'jsdoc-format': true,
    'label-position': true,
    'max-line-length': [true, 120], // 19.12 exception
    'member-ordering': [true, { order: 'fields-first' }],
    'no-any': false,
    'no-arg': true,
    'no-bitwise': true,
    'no-conditional-assignment': true,
    'no-console': [true, 'log', 'error', 'debug', 'info', 'time', 'timeEnd', 'trace'],
    'no-debugger': true,
    'no-duplicate-variable': true,
    'no-dynamic-delete': true,
    'no-empty': true,
    'no-shadowed-variable': true,
    'no-string-literal': false,
    'no-switch-case-fall-through': true,
    'no-unused-expression': true,
    'no-use-before-declare': false,
    'one-line': [true, 'check-catch', 'check-else', 'check-open-brace', 'check-whitespace'],
    semicolon: [true, 'always', 'ignore-bound-class-methods'], // 21.1 addition
    'switch-default': true,
    'trailing-comma': [
      true,
      {
        multiline: 'never',
        singleline: 'never',
        esSpecCompliant: true
      }
    ], // 20.2 exception
    typedef: [true, 'parameter', 'property-declaration'],
    'typedef-whitespace': [
      true,
      {
        'call-signature': 'nospace',
        'index-signature': 'nospace',
        parameter: 'nospace',
        'property-declaration': 'nospace',
        'variable-declaration': 'nospace'
      }
    ],
    'variable-name': [
      // 23.2 addition
      true,
      'ban-keywords',
      'check-format',
      'allow-leading-underscore',
      'allow-pascal-case'
    ]
  }
};
