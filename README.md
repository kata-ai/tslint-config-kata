# tslint-config-kata

> TSLint config used at Kata.ai

## Introduction

This is the common TSLint config used by projects at [Kata.ai](https://kata.ai). All TSLint rules follow the Kata Platform Development Standard.

## Installation

Install `tslint` and `tslint-config-kata` using your favourite package manager:

```bash
# yarn
yarn add --dev tslint tslint-config-kata
# npm
npm install --save-dev tslint tslint-config-kata
```

## Contributing

### Versioning

Note that this package does not specifically follow Semantic Versioning, since all changes in this package are relative to the changes in our Development Standard.

### Pull requests

Pull requests are welcome, but PRs from Kata.ai employees will be proritised.

### Development guide

Install dependencies using [Yarn](https://yarnpkg.com).

```bash
yarn
```

To start incremental build, run:

```bash
yarn start
```

To build the package for publishing, run:

```bash
yarn publish
```

### Adding custom rules

Please follow the [TSLint documentation](https://palantir.github.io/tslint/develop/custom-rules/) on adding custom rules. Make sure to follow these conventions:

* Rule identifiers are always kebab-cased.
* Rule files are always camel-cased (`camelCasedRule.ts`).
* Rule files must contain the suffix `Rule`.
* The exported class must always be named `Rule` and extend from `Lint.Rules.AbstractRule`.

Custom rules must be added inside the `./src/rules` directory. To load it into TSLint, make sure to add said folder to the `rulesDirectory` config.

```ts
// ./src/base.ts
module.exports = {
  rulesDirectory: ['./rules', ...otherRules],
  ...otherConfigs
};
```

We have also imported additional rules from [tslint-react](https://github.com/palantir/tslint-react), [tslint-microsoft-contrib](https://github.com/Microsoft/tslint-microsoft-contrib), and [tslint-consistent-codestyle](https://www.npmjs.com/package/tslint-consistent-codestyle).
