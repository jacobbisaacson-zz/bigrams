const parse = (str) => {
  // https://eloquentjavascript.net/09_regexp.html
    // \W -- nonalphanumeric character
    // g -- globally
    // ^ -- to match
  // all words in the string, NOT non-alpha characters
  let words = str.match(/([^_\W]+)'?[^_\W]/g)
  // make lowercase
  words = words.map(word => word.toLowerCase())
  console.log(str);
  return words
}



// NO apostrophes or can't, don't, etc.
  // str.match(/\b(\w+)\b/g)





module.exports = { parse }