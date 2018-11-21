# Contributing Guidelines

## The Five Golden Rules

The simple steps of contributing to any GitHub project are as follows:

1.  Fork the repository(https://github.com/kata-ai/tslint-config-kata/fork)
2.  Create your feature branch: `git checkout -b my-new-feature`
3.  Commit your changes: `git commit -am 'Add some feature'`
4.  Push to the branch: `git push -u origin my-new-feature`
5.  Create a [Pull Request](https://github.com/kata-ai/tslint-config-kata/pulls)!

To keep your fork of in sync with this repository, [follow this guide](https://help.github.com/articles/syncing-a-fork/).

## Prerequisites

### Windows, macOS and Linux

- [Git](http://git-scm.com/)
- [Node.js](http://nodejs.org/) (8.0.0+)
- [Yarn](https://yarnpkg.com/)
- Text Editor with [EditorConfig](http://editorconfig.org/) & [Prettier](https://prettier.io/) support. (We recommend [Visual Studio Code](https://code.visualstudio.com/))

## Development guide

Install dependencies using [Yarn](https://yarnpkg.com).

```sh-session
$ yarn
```

To start incremental build, run:

```sh-session
$ yarn start
```

After updating, test the changes against the code by building it:

```sh-session
$ yarn build
```

To build the package for publishing, run:

```sh-session
$ yarn publish
```

## Configuration files

Just like ESLint, the TSLint config can either be written in JSON format, or plain JS format. In this case, we use the latter, but compiled from TypeScript.

The main entry point for our config is the `.js` files located at the root. Note that we separated the configurations into two:

- `./index.js` - Base config that overrides the default TSLint config.
- `./react.js` - Overrides to React-specific rules provided by `tslint-react`.

The config files are written in the following format:

```js
// ./index.js

// Point to the built index file, and specifically choose the config to use.
module.exports = require('./build/index').baseConfig;
```

Next comes the configuration file. This file is formatted the same as a regular `tslint.json` file, only in JavaScript. For an example on how to write rules in this format, see [this example config](https://github.com/kata-ai/tslint-config-kata/blob/master/src/config/base.ts).

It is **very important** to use a separate named export in this very file for creating additional configs.

```ts
// ./src/index.ts
import react from './config/react';
import base from './config/base';

export const baseConfig = {
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

export const otherConfig = {
  // ...another config path using different configs
};
```

**Further reading:** The [TSLint documentation](https://palantir.github.io/tslint/2016/03/31/sharable-configurations-rules.html) on shareable configurations.

## Adding custom rules

Please follow the [TSLint documentation](https://palantir.github.io/tslint/develop/custom-rules/) on adding custom rules. Make sure to follow these conventions:

- Rule identifiers are always kebab-cased.
- Rule files are always camel-cased (`camelCasedRule.ts`).
- Rule files must contain the suffix `Rule`.
- The exported class must always be named `Rule` and extend from `Lint.Rules.AbstractRule`.

Custom rules must be added inside the `./src/rules` directory. To load it into TSLint, make sure to add said folder to the `rulesDirectory` config.

```ts
// ./src/base.ts
module.exports = {
  rulesDirectory: ['./rules', ...otherRules],
  ...otherConfigs
};
```

We have also imported additional rules from [tslint-react](https://github.com/palantir/tslint-react), [tslint-microsoft-contrib](https://github.com/Microsoft/tslint-microsoft-contrib), and [tslint-consistent-codestyle](https://www.npmjs.com/package/tslint-consistent-codestyle).
