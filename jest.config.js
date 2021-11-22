/**
 * Jest is a delightful JavaScript Testing Framework
 * with a focus on simplicity.
 *
 * @see https://jestjs.io/docs/en/configuration.html
 */
module.exports = {
  /**
   * Display individual test results with the test suite hierarchy.
   */
  verbose: true,

  /**
   * Automatically clear mock calls and instances before every test.
   */
  clearMocks: true,

  /**
   * The directory where Jest should output its coverage files.
   */
  coverageDirectory: 'reports/coverage',

  /**
   * Coverage report export type
   */
  coverageReporters: ['text', 'html', 'clover', 'cobertura'],

  /**
   * Unit Test Reporter
   */
  reporters: [
    'default',
    [
      'jest-junit',
      {
        outputDirectory: './reports/test',
        outputName: 'junit.xml',
        suiteName: 'unit',
      },
    ],
  ],

  /**
   * Test environment options that will be passed
   * to the testEnvironment.
   */
  testEnvironment: 'node',

  /**
   * The glob patterns Jest uses to detect test files.
   */
  testMatch: ['<rootDir>/**/tests/**/*.test.js'],

  /**
   * An array of glob patterns indicating
   * a set of files for which coverage information
   * should be collected
   */
  collectCoverageFrom: ['src/**/*.{ts,js}'],

  /**
   * Default timeout of a test in milliseconds.
   *
   * @see https://jestjs.io/docs/en/configuration#testtimeout-number
   */
  testTimeout: 5000,
}
