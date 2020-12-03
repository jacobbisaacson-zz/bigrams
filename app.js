// converstion to ES6 causes import/export error (checked typos, can't F.I)

const parser = require('./parseBigram')
const FileReader = require('./inputReader')
const writer = require('./outputWriter')
const readline = require('readline')
// https://node.readthedocs.io/en/latest/api/readline/

// build the CLI
// https://nodejs.org/api/readline.html#readline_readline_createinterface_options
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
})

console.log(`
  GoHealth Bigram Problem!
  Let's do this!
`);

rl.question(`Please type the input file name and hit 'enter': `, fileName => {
  if (fileName) {
    const filePath = `./inputFiles/${fileName}`
    let reader = new FileReader(filePath)
    reader.read(() => {
      const bigrams = parser.parseBigrams(reader.data)
      const histogram = parser.createHistogram(bigrams)
      writer.write(histogram)

      ///////////////////////
      console.log(`
--------------------------------
Histogram of Bigram Instances in "${fileName}"
--------------------------------

`, histogram);
    })

    ////////////////////////
  } else {
    console.log('Sorry, cannot read the file. Please try again.');
  }
  rl.close()
})

