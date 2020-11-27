const fs = require("fs");

const write = (object) => {
  fs.writeFile("./output/output.txt", JSON.stringify(object), (err) => {
    if (err) {
      console.error(err);
      return;
    }
    console.log("Check output.txt for the Bigram Histrogram");
  });
};

module.exports = { write };