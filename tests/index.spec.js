/**
 * Expressions to be used in test codes.
 */

/// expected
var expected = 'Application'

/// actual
var actual = require('../src').name

/// assert
var assert = expected == actual ? 'Success' : 'Error'

// eslint-disable-next-line no-console
console.log(assert)
