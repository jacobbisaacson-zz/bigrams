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

const createHistrogram = (wordList) => {
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
  // console.log(wordList)
  return bigramHistogram
}

let stringList = parse("This., -/ #! an $ % ^ & * example ;: {} of a = -_ string with `~)() punctuation  and-spaces ")
console.log(createHistrogram(stringList));
stringList = parse(`Testing's, doing things in here, when there's time.`)
console.log(createHistrogram(stringList));
stringList = parse(`Example of the this thing and the this other guy.`)
console.log(createHistrogram(stringList));


// export { parse, createHistrogram };
module.exports = { parse, createHistrogram }