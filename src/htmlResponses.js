const fs = require('fs'); // pull in the file system module

// __dirname is a global in Node of whichever folder this file is in
const index = fs.readFileSync(`${__dirname}/../client/client.html`);
const page2 = fs.readFileSync(`${__dirname}/../client/client2.html`);

const getIndex = (request, response) => {
  response.writeHead(200, { 'Content-Type': 'text/html' });
  response.write(index);
  response.end(); // response not sent until end is called, cannot write after that
};

const getPage2 = (request, response) => {
  response.writeHead(200, { 'Content-Type': 'text/html' });
  response.write(page2);
  response.end();
};

module.exports.getIndex = getIndex;
module.exports.getPage2 = getPage2;
