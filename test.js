import { parse, createHistrogram } from 'parser.js'
const assert = require('assert')
const parser = require('./parser.js')
// set of assertion functions for testing

// https://nodejs.org/api/assert.html#assert_assert_equal_actual_expected_message
// super basic test to make sure it works
it('RETURNS TRUE', () => {
  assert.equal(true, true)
})

it('SEPARATES WORDS AFTER SPACES AND PUNCTUATION', () => {
  assert.equal(parser.parse(`Testing's, doing things in here, when there's time.`), [
    `Testing's`, 'doing', 'things', 'in', 'here', 'when', `there's`, 'time'
  ])
})