const util = require('./util');
const http = require('http');

const foo = () => {
  console.log('foo');
  util('test');
}

foo();
const port = 8889;
const host = 'localhost';

const requestListener = function (req, res) {
  res.writeHead(200);
  res.end("My first server!");
};

const server = http.createServer(requestListener);
server.listen(port, host, () => {
  console.log(`Server is running on http://${host}:${port}`);
});
