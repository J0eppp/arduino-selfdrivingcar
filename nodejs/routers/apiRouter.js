const router = require("express").Router();
const Serial = require('serialport');
// const tcpSocket = require("../tcpHandler");

// const data = tcpSocket;

var port = new Serial("/dev/ttyUSB0", { baudRate: 9600 });

function getSerialData() {
  var result;
  port.on("data", (data) => {
    result = data;
  });
  return result;
}

router.get("/distancesensor", (req, res) => {
  // var resp = data();
  var resp = getSerialData();
  console.log("DATADADSLJKS /SDFJ LSDF J: " + resp);
  let response = resp.split("_")
  if (resp[0] == "US")
  var json = {sensor1: response[1], sensor2: response[2], sensor3: response[3]};
  res.send(json);
});

module.exports = router;
