/*
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
#
# Copyright (C) 2016-2022 Volebo <dev@volebo.net>
# Copyright (C) 2016-2022 Maksim Koryukov <maxkoryukov@volebo.net>
#
# This program is free software: you can redistribute it and/or modify
# it under the terms of the MIT License, attached to this software package.
#
# This program is distributed in the hope that it will be useful,
# but WITHOUT ANY WARRANTY; without even the implied warranty of
# MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.
#
# You should have received a copy of the MIT License along with this
# program. If not, see <https://opensource.org/licenses/MIT>.
#
# http://spdx.org/licenses/MIT
#
################################################################################
*/


'use strict'


exports = module.exports = {
	extends: [
		'eslint:recommended'
		//'./node_modules/coding-standard/eslintDefaults.js',
		// Override eslintDefaults.js
		//'./node_modules/coding-standard/.eslintrc-es6',
		// Override .eslintrc-es6
		//'./node_modules/coding-standard/.eslintrc-jsx',
	],

	env: {
		'node': true,
		'es6': true,
	},

	parserOptions: {
		// https://kangax.github.io/compat-table/es2016plus/https://kangax.github.io/compat-table/es2016plus/
		ecmaVersion: 9,

		// sourceType: 'module',
	},

	rules: {
		// Override any settings from the 'parent' configuration
		'comma-dangle' : ['error', 'only-multiline'],  // TODO: review this rule
		'no-process-exit': ['error'],

		/* CODE STYLE */
		'dot-notation': 'off',

		'indent': [
			'error',
			'tab',
			{
				'SwitchCase': 1,
			}
		],
		'new-cap': ['warn'],
		'no-extra-parens': ['warn', 'all', { 'nestedBinaryExpressions': false }],
		'curly': 'error',
		'no-trailing-spaces': 'error',
		'no-irregular-whitespace': ['error', { 'skipComments': true }],
		'no-new-object': 'error',
		'semi': [ 'error', 'never'],
		'quotes': [
			'error',
			'single',
			{
				avoidEscape: true,
				allowTemplateLiterals: true,
			},
		],
		'no-tabs': 'off',

		/* STATIC SECURITY */
		'strict': ['error', 'global'],

		'no-cond-assign': 'error',
		'eqeqeq': 'error',
		'no-bitwise': 'error',
		'guard-for-in': 'error',
		'no-eq-null': 'error',
		'no-unreachable': 'error',
		'no-eval': 'error',
		'no-loop-func': 'error',
		'no-iterator': 'error',
		'no-multi-str': 'error', // use \n instead!
		'valid-typeof': 'error',
		'no-proto': 'error',
		'no-script-url': 'error',
		'require-yield': 'error',

		'no-native-reassign': 'error',
		'no-extend-native': 'error',

		'max-params': ['warn', { 'max': 4 }],
		'complexity': ['warn', { 'max': 20 }],
		'max-depth': ['warn', { 'max': 5 }],

		'no-path-concat': ['error'],

		'no-caller': ['error'],
		'no-empty': ['error', { 'allowEmptyCatch': false }],
		'no-empty-function': ['error'],
		'no-new': ['error'],

		// variables definitions
		'no-var': 'error',
		'prefer-const': ['warn', { /*'ignoreReadBeforeAssign' : false */ }],
		'no-const-assign': 'error',
		'no-use-before-define': ['error', { 'functions': false, 'classes': true }],
		'no-undef': ['error', { 'typeof': true }],

		// will ignore unused arguments, but skip args:
		// `_` - lodash placeholder
		// `next` - express callback
		// `_unused_XXX` - explicitly unused named variables
		'no-unused-vars' : ['error', { 'args': 'all', 'argsIgnorePattern': '(_|next|^__)' }],

		/* SMELL */
		'no-console': 'error',  // use `debug` or other packages, or add explicit "eslint-ignore" for lines with console.xxx
		'no-alert': 'error',

		'no-plusplus': [
			'error',
			{
				allowForLoopAfterthoughts: true,
			},
		],
		'no-param-reassign': [
			'error',
			{
				props: false,
			},
		],

	},

	overrides: [
		{
			files: [
				'**/*.test.js',
				'**/*.spec.js'
			],

			env: {
				'mocha': true,
			},
			globals: {
				'expect': true,
				'filename2suitename': true,
				'tags': true,
			},
			rules: {
				// `expectJS` uses expressions like `.xx.is.null`
				'no-unused-expressions': 'off',
			},
		}
	],
}
