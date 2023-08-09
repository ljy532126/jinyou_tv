const fs = require('fs');
const path = require('path');
function getRandomFileName(folderPath) {
  return new Promise((resolve, reject) => {
    fs.readdir(folderPath, (err, files) => {
      if (err) {
        return reject(err);
      }      if (files.length === 0) {
        return reject(new Error('Folder is empty'));
      }      const randomIndex = Math.floor(Math.random() * files.length);
      const randomFile = files[randomIndex];
      resolve(randomFile);
    });
  });
}
module.exports = getRandomFileName;