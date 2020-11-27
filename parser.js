const parse = (str) => {
  // https://eloquentjavascript.net/09_regexp.html
  // \W -- nonalphanumeric character
  // g -- globally
  // ^ -- to match
  // all words in the string, NOT non-alpha characters
  let words = str.match(/([^_\W]+)'?[^_\W]/g);
  // make lowercase
  words = words.map(word => word.toLowerCase())
  console.log(str);
  return words;
};

// NO apostrophes or can't, don't, etc.
// str.match(/\b(\w+)\b/g)

const createHistrogram = (word_list) => {
  const bigramHistogram = {}
  if (wordList.length === 1) {
    return bigrams
  }
  for(let i = 0; i < wordList.length - 1; i++) {
    let firstWord = wordList[i]
    let secondWord = wordList[i + 1]
    let bigram = firstWord + '.' + secondWord
    if (bigramHistogram[bigram]) {
      bigramHistogram[bigram] = + bigramHistogram[bigram] + 1
    } else {
      bigramHistogram[bigram] = + 1
    }
  }
  console.log(wordList)
  return bigramHistogram
}

module.exports = parse