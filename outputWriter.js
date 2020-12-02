const fs = require("fs");

const write = (object) => {
  fs.writeFile("./output/output.txt", JSON.stringify(object), (err) => {
    if (err) {
      console.error(err);
      return;
    }
    console.log("You can view the output file in '/output' in your text editor");
  });
};

module.exports = { write };