// import { parse, createHistrogram } from 'parser.js'
const parser = require("./parseBigram");
const chai = require("chai");
const assert = require('assert')

// set of assertion functions for testing

// https://nodejs.org/api/assert.html#assert_assert_equal_actual_expected_message
// super basic test to make sure it works
it("RETURNS TRUE", () => {
  assert.equal(true, true);
});

// it('SEPARATES WORDS AFTER SPACES AND PUNCTUATION', () => {
//   assert.equal(parser.parse(`Testing's doing things in here, in time.`), [
//     `Testing's`, 'doing', 'things', 'in', 'here', 'in', 'time'
//   ])
// })

it("Will NOT parse bigrams from an empty string", () => {
  chai.expect(parser.parseBigrams("")).to.have.members([]);
});

it("Will NOT parse bigrams from a single-word-string", () => {
  chai.expect(parser.parseBigrams("Word")).to.have.members([]);
});

it("Works correctly with proper lower/upper-case", () => {
  chai
    .expect(
      parser.parseBigrams("I love Bruna and she is a Cute doge.")
    )
    .to.have.members([
      "i love",
      "love bruna",
      "bruna and",
      "and she",
      "she is",
      "is a",
      "a cute",
      "cute doge",
    ]);
});

it("Works when input is a string WITH punctuation", () => {
  chai
    .expect(
      parser.parseBigrams(
        "This., -/ is #! an $ % ^ & * example ;: {} of a = -_ string with `~)() punctuation."
      )
    )
    .to.have.members([
      "this is",
      "is an",
      "an example",
      "example of",
      "of a",
      "a string",
      "string with",
      "with punctuation",
    ]);
});




