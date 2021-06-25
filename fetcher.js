const myArgs = process.argv.slice(2);
const request = require('request');
const fs = require('fs')

let data;

request(myArgs[0], (error, response, body) => {
  if(response && response.statusCode === 200) {
    data = body;
    writeFile();
  };
  
});


const writeFile = function () {
  fs.writeFile(myArgs[1], data , err => {
    if (err) {
      console.error(err)
      return
    } else {
      console.log(`Downloaded and saved ${data.length} bytes to ${myArgs[1]}`);
    }

  })
}



// http://example.edu/
