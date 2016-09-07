# is-os-cli

[![npm][npm-image]][npm-url]
[![standard][standard-image]][standard-url]

[npm-image]: https://img.shields.io/npm/v/is-os-cli.svg?style=flat-square
[npm-url]: https://www.npmjs.com/package/is-os-cli
[standard-image]: https://img.shields.io/badge/code%20style-standard-brightgreen.svg?style=flat-square
[standard-url]: http://npm.im/standard

CLI utility to check if operating system. Useful for npm scripts.

## Install

```
npm install -g is-os-cli
```

## Usage

In your npm script, some task that can only be ran on Windows:

```json
{
  "scripts": {
    "build-app": "is-os win32 && build-command-here"
  }
}
```




## License

[MIT](LICENSE.md)
