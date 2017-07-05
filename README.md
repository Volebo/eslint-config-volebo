# eslint-config-volebo

[![npm version](https://img.shields.io/npm/v/eslint-config-volebo.svg)](https://www.npmjs.com/package/eslint-config-volebo)
[![Build Status](https://travis-ci.org/volebo/eslint-config-volebo.svg?branch=master)](https://travis-ci.org/volebo/eslint-config-volebo)
[![npm downloads](https://img.shields.io/npm/dm/eslint-config-volebo.svg)](https://www.npmjs.com/package/eslint-config-volebo)

Common style guide for all Volebo.Net projects

## Install

```shell
npm install eslint-config-volebo -S
```

## Usage

Just paste this to the `.eslintrc.js` in the root of your project:

```javascript
const path = require('path');

exports = module.exports = {
  'extends': [
    path.join(__dirname,
      'node_modules',
      'eslint-config-volebo',
      'index.js'
    )
  ]
}
```

This version is much better, but it requires to install `eslint-config-volebo` **globally** (for details, read comments to [this issue](https://github.com/eslint/eslint/issues/3458))

```javascript
exports = module.exports = {
  'extends': [
    'volebo',
  ],
}
```

## License

Please, follow the link: [LICENSE](LICENSE)
