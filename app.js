const parser = require('./parseBigram')
const FileReader = require('./inputReader')
const writer = require('./outputWriter')
const readLine = require('readLine')
// https://node.readthedocs.io/en/latest/api/readline/

// build the CLI
// https://nodejs.org/api/readline.html#readline_readline_createinterface_options
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
})

console.log(`
  GoHealth Bigram Problem!
`);

rl.question('Please type the input file name: ', fileName => {
  if (fileName) {
    const filePath = `./textFiles/${fileName}`
    let reader = new FileReader(filePath)
    reader.read(() => {
      const bigrams = parser.parseBigrams(reader.data)
      const histogram = parser.createHistogram(bigrams)
      writer.write(histogram)
    })
  } else {
    console.log('Sorry, cannot read the file. Please try again.');
  }
  rl.close()
})

