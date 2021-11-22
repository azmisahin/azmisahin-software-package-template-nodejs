// assert library
const assert = require('assert').strict

// Target condination.
const target = 'application'
const Application = require('../../src')

/**
 * Application initiation tests.
 */
describe(`${target}`, function () {
  // Main application carrier
  let application

  /**
   * Instance initalize
   */
  beforeEach(function () {
    // template instance
  })

  /**
   * Should create an instance of Module.
   */
  it(`${target}.constructor`, function () {
    // module instance
    application = new Application()

    // mock
    let _parameters = Application

    // parameters
    let expected = _parameters

    // operation
    let result = application

    // result
    let actual = result

    // condination
    assert(actual instanceof expected)
  })
})
