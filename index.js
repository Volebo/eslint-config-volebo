/*
The MIT License (MIT)

ESLint rules for volebo.net

Copyright (C) 2016  Volebo.Net <volebo.net@gmail.com>
Copyright (C) 2016  Koryukov Maksim <maxkoryukov@gmail.com>

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
*/

exports = module.exports = {
	"extends": [
		"eslint:recommended"
		//"./node_modules/coding-standard/eslintDefaults.js",
		// Override eslintDefaults.js
		//"./node_modules/coding-standard/.eslintrc-es6",
		// Override .eslintrc-es6
		//"./node_modules/coding-standard/.eslintrc-jsx",
	],

	"env": {
		"node": true,
		"es6": true,
	},

	"rules": {
		// Override any settings from the "parent" configuration
		"comma-dangle" : ["error", "only-multiline"],
		"no-process-exit": ["error"],
		"no-path-concat": ["error"],
		"no-extra-parens": ["error", "all", { "nestedBinaryExpressions": false }],
		"no-cond-assign": ["error"],

		/* CODE STYLE */
		"indent": ["warn", "tab"],
		"curly": ["warn"],
		"new-cap": ["warn"],

		/* STATIC SECURITY */
		"eqeqeq": ["error"],
		"guard-for-in": ["error"],
		"no-use-before-define": ["error", { "functions": true, "classes": true }],
		"no-caller": ["error"],
		"no-empty": ["error", { "allowEmptyCatch": false }],
		"no-empty-function": ["error"],
		"no-irregular-whitespace": ["error", { "skipComments": true }],

		"no-native-reassign": ["error"],
		"no-extend-native": ["error"],
		"strict": ["error", "global"],
		"no-unused-vars" : ["warn", { "argsIgnorePattern": "next" }],
		"no-bitwise": ["error"],
	},

	"quiet": true
};
