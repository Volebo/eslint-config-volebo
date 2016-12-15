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
		"comma-dangle" : ["error", "only-multiline"],  // TODO: review this rule
		"no-process-exit": ["error"],

		/* CODE STYLE */
		"dot-notation": "off",

		"indent": ["warn", "tab"],
		"new-cap": ["warn"],
		"no-extra-parens": ["warn", "all", { "nestedBinaryExpressions": false }],
		"curly": "error",
		"no-trailing-spaces": "error",
		"no-irregular-whitespace": ["error", { "skipComments": true }],
		"no-new-object": "error",

		/* STATIC SECURITY */
		"strict": ["error", "global"],

		"no-cond-assign": "error",
		"eqeqeq": "error",
		"no-bitwise": "error",
		"guard-for-in": "error",
		"no-eq-null": "error",
		"no-unreachable": "error",
		"no-eval": "error",
		"no-loop-func": "error",
		"no-iterator": "error",
		"no-multi-str": "error", // use \n instead!
		"valid-typeof": "error",
		"no-proto": "error",
		"no-script-url": "error",
		"require-yield": "error",

		"no-native-reassign": "error",
		"no-extend-native": "error",

		"max-params": ["warn", { "max": 4 }],
		"complexity": ["warn", { "max": 20 }],
		"max-depth": ["warn", { "max": 5 }],

		"no-path-concat": ["error"],

		"no-caller": ["error"],
		"no-empty": ["error", { "allowEmptyCatch": false }],
		"no-empty-function": ["error"],
		"no-new": ["error"],

		// variables definitions
		"no-use-before-define": ["error", { "functions": true, "classes": true }],
		"no-undef": ["error", { "typeof": true }],
		"no-unused-vars" : ["error", { "args": "all", "argsIgnorePattern": "(next|^_unused)" }],


	},

	"quiet": true
};
