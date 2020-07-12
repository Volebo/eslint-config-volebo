# eslint-config-volebo

```yaml
################################################################################
#                                                                              #
# db    db  .8888.  dP     888888b 8888ba   .8888.     d8b   db 888888b d8888P #
# 88    88 d8'  `8b 88     88      88  `8b d8'  `8b    88V8  88 88        88   #
# Y8    8P 88    88 88    a88aaa   88aa8P' 88    88    88 V8 88 88aaa     88   #
# `8b  d8' 88    88 88     88      88  `8b 88    88    88  V888 88        88   #
#  `8bd8'  Y8.  .8P 88     88      88  .88 Y8.  .8P dP 88   V88 88        88   #
#    YP     `888P'  88888P 888888P 888888'  `888P'  88 VP    8P 888888P   dP   #
#                                                                              #
################################################################################
```

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
const path = require('path')

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

This version is much better, but it requires to install `eslint-config-volebo` **globally**
(for details, read comments to [this issue](https://github.com/eslint/eslint/issues/3458))

```javascript
exports = module.exports = {
  'extends': [
    'volebo',
  ],
}
```

## License

Please, follow the link: [LICENSE](LICENSE)
