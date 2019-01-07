# tslint-config-kata

> TSLint config used at Kata.ai

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

If you're using this TSLint config for React-based projects, extend `tslint-config-kata/react` instead.

```json
{
  "extends": ["tslint-config-kata/react"]
}
```

For more setups, take a look at the [templates directory](./templates)

## Versioning

Note that this package does not specifically follow Semantic Versioning, since all changes in this package are relative to the changes in our Development Standard. Major version bumps will occur when we transition into a new major version of TSLint.

To recap:

- `major`: Will be bumped when we transition to a new major version of TSLint
- `minor`: Potentially breaking changes that's still within the same major version of TSLint
- `patch`: Minor patches/bugfixes

## Using Prettier

[Prettier](https://prettier.io/) is a tool to automatically format your code during save. It supports various editors, from VSCode, Atom, Sublime, and even Emacs.

To use this TSLint config in conjunction with Prettier, copy the `.prettierrc` file in this repository and paste it to your project.

Then install the Prettier TSLint config and plugin:

```sh-session
$ yarn add --dev tslint-plugin-prettier tslint-config-prettier prettier
```

And finally, include them as follows. (**IMPORTANT:** `tslint-config-prettier` MUST be extended last in the `extends` array!)

```json
{
  "rulesDirectory": ["tslint-plugin-prettier"],
  "extends": ["tslint-config-kata", "tslint-config-prettier"],
  "linterOptions": {
    "exclude": ["node_modules/**"]
  },
  "rules": {
    "prettier": true
  }
}
```

## Contributing

Issues and Pull Requests welcome! Please read the [Contributing Guidelines](CONTRIBUTING.md) beforehand.

## License

[MIT](LICENSE) (c) 2018 Kata.ai.

# Maintainers

- Resi Respati ([@resir014](https://twitter.com/resir014)) – Kata.ai
