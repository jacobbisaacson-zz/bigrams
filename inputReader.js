// https://nodejs.org/api/fs.html#fs_class_fs_readstream
const fs = require('fs')
// https://www.npmjs.com/package/event-stream
const es = require('event-stream')



// fs.createReadStream( path, options )
// https://www.geeksforgeeks.org/node-js-fs-createreadstream-method/

class FileReader {
  constructor(fileName) {
    this.reader = fs.createReadStream(fileName, { encoding: 'utf8' })
    this.totalSize = 100
    this.lineNumber = 0
    this.data = []
  }

  // https://www.npmjs.com/package/event-stream
    // fs.createReadStream(filename)
    // .pipe(es.split()) //defaults to lines.
    // .pipe(es.parse())
    // the push the line to data array

  // change to async / await?

  read(callback) {
    this.reader.pipe(es.split()).pipe(es.mapSync(line => {
      ++ this.lineNumber
      this.data.push(line)
      if (this.lineNumber % this.totalSize === 0) {
        callback(this.data)
      }
    }))
    .on('error', function(err) {
      console.log("There was an ERROR reading file", err);
    })
    .on('end', function() {
      console.log("Done -- file has been read");
    })
  }

  continue () {
    this.data = []
    this.reader.resume()
  }
}

module.exports = FileReader