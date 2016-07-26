# eslint-config-volebonet

[![npm version](https://img.shields.io/npm/v/eslint-config-volebonet.svg)](https://www.npmjs.com/package/eslint-config-volebonet)
[![npm downloads](https://img.shields.io/npm/dm/eslint-config-volebonet.svg)](https://www.npmjs.com/package/eslint-config-volebonet)

Common style guide for all Volebo.Net projects

## Install

```shell
npm install eslint-config-volebonet
```

## Usage

Just paste this to the `.eslintrc.js` in the root of your project:

```javascript
const path = require('path');

exports = module.exports = {
	"extends": [
        path.join(__dirname, 'node_modules', 'eslint-config-volebonet', 'index.js')
	]
}
```

This version is much better, but it requires to install `eslint-config-volebonet` **globally** (for details, read comments to [this issue](https://github.com/eslint/eslint/issues/3458))

```javascript
exports = module.exports = {
	"extends": [
		"volebonet"
	],
}
```

## License

Please, follow the link: [LICENSE](LICENSE)
