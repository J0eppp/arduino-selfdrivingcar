const router = require("express").Router();
const tcpSocket = require("../tcpHandler");

const data = tcpSocket;

router.get("/distancesensor", (req, res) => {
  var resp = data();
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
