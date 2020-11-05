const request = require('request');
const fs = require('fs');

const webAdress = process.argv[2];
const filePath = process.argv[3];

request(webAdress, (error, response, body) => {
  if (error) {
    console.log('Failed to download: ', error);
    return;
   }
   fs.writeFile(filePath, body, (error) => {
    if (error) {
     console.log('Failed to write to localPath: ', filePath);
    } else {
     console.log(`Downloaded and saved ${body.length} bytes to ${filePath}`);
    }
  });
});
