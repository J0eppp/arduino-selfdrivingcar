const router = require("express").Router();
const Serial = require('serialport');
// const tcpSocket = require("../tcpHandler");

// const data = tcpSocket;

var port = new Serial("/dev/ttyUSB0", { baudrate: 9600 });

function getSerialData() {
  var result;
  port.on("data", (data) => {
    result = data.toString()
  });
  return result;
}

router.get("/distancesensor", (req, res) => {
  // var resp = data();
  var resp = getSerialData();
  let response = resp.split("_")
  if (response[0] == "US")
  var json = {
    sensor1: response[1],
    sensor2: response[2],
    sensor3: response[3]
  };
  res.send(json);
});

module.exports = router;
