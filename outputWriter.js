const fs = require("fs");

// https://nodejs.org/api/fs.html#fs_fs_writefile_file_data_options_callback //

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