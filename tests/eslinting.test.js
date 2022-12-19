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


const { ESLint }   = require('eslint')


// const thisConfig   = require('../index.js')


const eslint = new ESLint({'ignore': false})

// mostly taken from ESLint examples:
function lintAsync(filePattern) {

	// 2. Lint files.
	// const results = await eslint.lintFiles(filePattern)
	const results = eslint.lintFiles(filePattern)

	// 3. Format the results.
	//const formatter = await eslint.loadFormatter("stylish")
	//const resultText = formatter.format(results)

	// 4. Output it.
	// console.log(resultText)

	return results
}



describe('eslint', () => {


	describe('linting good files', () => {

		const testCases = [
			'./tests/samples/01.good.js',
		]


		testCases.forEach(name => {

			it(`should pass [${name}]`, () => {

				return lintAsync(name)
					.then(res => {
						expect(res).is.an('array').lengthOf(1)

						const res0 = res[0]

						expect(res0).has.property('messages').eql([])
						expect(res0).has.property('errorCount', 0)
						expect(res0).has.property('warningCount', 0)
					})
			})
		})
	})


	describe('linting bad files', () => {

		const testCases = [
			'./tests/samples/02.bad.js',
		]


		testCases.forEach(name => {

			it(`should pass [${name}]`, () => {

				return lintAsync(name)
					.then(res => {
						expect(res).is.an('array').lengthOf(1)

						const res0 = res[0]

						expect(res0).has.property('messages')
							.is.an('array')
							.has.property('0')
							.contains({
								column: 1,
								line: 1,
								messageId: 'wrongQuotes',
								ruleId: 'quotes',
								severity: 2,
							})
						expect(res0).has.property('errorCount', 1)
						expect(res0).has.property('warningCount', 0)
					})
			})
		})
	})
})
