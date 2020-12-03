// NO apostrophes or can't, don't, etc.
// str.match(/\b(\w+)\b/g)

// https://eloquentjavascript.net/09_regexp.html
// \W -- nonalphanumeric character
// g -- globally
// ^ -- to match
// all words in the string, NOT non-alpha characters


const parseBigrams = (str) => {
  const bigrams = []
  if (str && str !== null) {
    let words = str.toLowerCase().match(/[^_\W]+/g)
    if (words && words.length > 1) {
      for (let i = 0; i < words.length - 1; i++) {
        bigrams.push(words[i] + ' ' + words[i + 1])
      }
    }
  }
  return bigrams
}

const checkBigram = (bigram) => {
  if (bigram.split(' ').length > 2)
    return false
  return (/\b[\w]+ [\w]+\b/).test(bigram)
}

const createHistogram = (bigrams) => {
  const bigramHistogram = {}
  for (let i = 0; i < bigrams.length; i++) {
    let bigram = bigrams[i]
    if (checkBigram(bigram)) {
      if (bigramHistogram[bigram]) {
        bigramHistogram[bigram] = + bigramHistogram[bigram] + 1
      } else {
        bigramHistogram[bigram] = 1
      }
    }
  }
  return bigramHistogram
}

module.exports = { parseBigrams, createHistogram }