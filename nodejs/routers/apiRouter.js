const router = require("express").Router();
const Serial = require('serialport');
// const tcpSocket = require("../tcpHandler");

// const data = tcpSocket;

var port = new Serial("/dev/ttyUSB0", { baudRate: 9600 });


var serialData;
port.on("data", (data) => {
  serialData = data.toString();
});

router.get("/distancesensor", (req, res) => {
  try {
    var serialArray = serialData.split("_");
    var response = { sensor1: serialArray[1], sensor2: serialArray[2], sensor3: serialArray[3] };
    res.send(response);
  } catch (e) {
    console.log("Loading...");
    res.send({ sensor1: 0, sensor2: 0, sensor3: 0 });
  }
});

module.exports = router;
