// import { parse, createHistrogram } from 'parser.js'
const parser = require("./parseBigram");
const chai = require("chai");

// ---------------------------------------------------------------- //

// const assert = require('assert')

// it("RETURNS TRUE", () => {
//   assert.equal(true, true);
// });

// set of functions for testing

// https://nodejs.org/api/assert.html#assert_assert_equal_actual_expected_message
// super basic test to make sure it works

// it('SEPARATES WORDS AFTER SPACES AND PUNCTUATION', () => {
//   assert.equal(parser.parse(`Testing's doing things in here, in time.`), [
//     `Testing's`, 'doing', 'things', 'in', 'here', 'in', 'time'
//   ])
// })

// ---------------------------------------------------------------- //

it("Will NOT parse bigrams from an empty string", () => {
  chai.expect(parser.parseBigrams("")).to.have.members([]);
});

it("Will NOT parse bigrams from a single-word-string", () => {
  chai.expect(parser.parseBigrams("Word")).to.have.members([]);
});

it("Works correctly with proper lower/upper-case characters", () => {
  chai
    .expect(
      parser.parseBigrams("I love Bruna and she is a Cute Doge.")
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

it("Works correctly with punctuation", () => {
  chai
    .expect(
      parser.parseBigrams(
        "This.,.,.,,. -/ is #! an $ % ^ & * :;,. example ;: {} of a = -_ string with .,.,.,/// `~)() punctuation."
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

// to.eql --> to.equal
// https://devhints.io/chai
it("Will count the bigrams and correclty apply to the histogram", () => {
  chai.expect(parser.createHistogram(["you got", "got a", "a friend", "friend in", "in me", "me you", "you got", "got a", "a friend", "friend in", "in me", "and some", "other things"]))
    .to.eql({
      "you got": 2,
      "got a": 2,
      "a friend": 2,
      "friend in": 2,
      "in me": 2,
      "me you": 1,
      "and some": 1,
      "other things": 1
    })
})

it("Works correctly when there are NO multiples of bigrams", () => {
  chai.expect(parser.createHistogram(["you got", "got a", "a friend", "friend in", "in me", "and some", "other things"]))
    .to.eql({
      "you got": 1,
      "got a": 1,
      "a friend": 1,
      "friend in": 1,
      "in me": 1,
      "and some": 1,
      "other things": 1
    })
})




