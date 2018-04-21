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

Then, on your `tslint.json` file, extend `tslint-config-kata`.

```json
{
  "extends": ["tslint-config-kata"]
}
```

## Contributing

### Versioning

Note that this package does not specifically follow Semantic Versioning, since all changes in this package are relative to the changes in our Development Standard. Major version bumps will occur when we transition into a new major version of TSLint.

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

### Configuration files

Just like ESLint, the TSLint config can either be written in JSON format, or plain JS format. In this case, we use the latter, but compiled from TypeScript.

The main entry point for our config is the `src/base.ts` file.

```ts
// ./src/base.ts
import react from './config/react';
import base from './config/base';

module.exports = {
  rulesDirectory: [
    // ...the custom rules we import
  ],
  extends: [
    // ...the configs/rulesets we extend
  ],
  rules: {
    ...base.rules,
    ...react.rules
    // ...add extra config sets below
  }
};
```

This file is formatted the same as a regular `tslint.json` file, only in JavaScript. For an example on how to write rules in this format, see [this example config](https://github.com/kata-ai/tslint-config-kata/blob/master/src/config/base.ts).

Note that we separated the configurations into two files:

* `./config/base` - Base config that overrides the default TSLint config.
* `./config/react` - Overrides to React-specific rules provided by `tslint-react`.

The config files are written in the following fornat:

```ts
// ./src/config/base.ts

export default {
  rules: {
    // insert tslint rules here
  }
};
```

**Further reading:** The [TSLint documentation](https://palantir.github.io/tslint/2016/03/31/sharable-configurations-rules.html) on shareable configurations.

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
