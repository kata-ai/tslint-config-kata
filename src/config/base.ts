export default {
  rules: {
    align: [true, 'statements'],
    ban: false,
    'class-name': true,
    'comment-format': [true, 'check-space'],
    curly: true,
    eofline: false,
    forin: true,
    indent: [true, 'spaces'],
    'interface-name': [true, 'always-prefix'],
    'jsdoc-format': true,
    'label-position': true,
    'max-line-length': [true, 120],
    'member-ordering': [true, { order: 'fields-first' }],
    'no-any': false,
    'no-arg': true,
    'no-bitwise': true,
    'no-conditional-assignment': true,
    'no-console': [
      true,
      'log',
      'error',
      'debug',
      'info',
      'time',
      'timeEnd',
      'trace'
    ],
    'no-consecutive-blank-lines': true,
    'no-construct': true,
    'no-debugger': true,
    'no-duplicate-variable': true,
    'no-dynamic-delete': true,
    'no-empty': true,
    'no-eval': true,
    'no-parameter-reassignment': true,
    'no-shadowed-variable': true,
    'no-string-literal': false,
    'no-switch-case-fall-through': true,
    'no-trailing-whitespace': false,
    'no-unused-expression': true,
    'no-use-before-declare': false,
    'one-line': [
      true,
      'check-catch',
      'check-else',
      'check-open-brace',
      'check-whitespace'
    ],
    quotemark: [true, 'single', 'jsx-double'],
    radix: true,
    semicolon: [true, 'always', 'ignore-bound-class-methods'],
    'switch-default': true,

    'trailing-comma': [false],

    'triple-equals': [true, 'allow-null-check'],
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
      true,
      'ban-keywords',
      'check-format',
      'allow-leading-underscore',
      'allow-pascal-case'
    ],
    whitespace: [
      true,
      'check-branch',
      'check-decl',
      'check-module',
      'check-operator',
      'check-separator',
      'check-type',
      'check-typecast'
    ]
  }
};
