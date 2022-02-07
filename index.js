const util = require('./util');
const http = require('http');

const foo = () => {
  // checkin from blured2
  console.log('foo-blured2-123*456-789');
  util('bar2');
}

foo();
const port = 8889;
const host = 'localhost';

const requestListener = function (req, res) {
  console.log('**** handle the request ****');
  res.writeHead(200);
  res.end("My first server!");
};

const server = http.createServer(requestListener);
server.listen(port, host, () => {
  console.log(`Server is running on http://${host}:${port}`);
});
