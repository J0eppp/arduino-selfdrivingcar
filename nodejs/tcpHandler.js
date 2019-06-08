const net = require('net');

let resp;

var client = new net.Socket();

client.connect(1337, '127.0.0.1', function() {
	console.log('Connected');
});

client.on('data', function(data) {
  var string = data.toString();
  resp = string;
});

client.on('close', function() {
	console.log('Connection closed');
});

function getData() {
  return resp;
}

module.exports = getData;
