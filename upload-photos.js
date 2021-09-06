const { exec } = require("child_process");
const path = require("path");
const fs = require("fs");

const directoryPath = path.join(__dirname, "public/photos/full-photos");

fs.readdir(directoryPath, function (err, files) {
  //handling error
  if (err) {
    return console.log("Unable to scan directory: " + err);
  }
  //listing all files using forEach
  files.forEach(function (file) {
    if (file !== ".DS_Store") {
      var photoName = file;
      var photoLocation = "public/photos/full-photos/" + file;

      var uploadString =
        "wrangler kv:key put " +
        photoName +
        " " +
        photoLocation +
        " --path --namespace-id 7d4b7bfdb92343a6a500a318a54886c9";

      exec(uploadString, (error, stdout, stderr) => {
        if (error) {
          console.log(`Error: ${file} ${error.message}`);
          return;
        }
        if (stderr) {
          console.log(`StdError: ${file} ${stderr}`);
          return;
        }
        console.log(`Uploaded: ${file} ${stdout}`);
      });
    }
  });
  console.log(`Uploading ${files.length} files`)
});
