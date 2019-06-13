const router = require("express").Router();
const fs = require('fs');

const getPicture = require("../getPicture");

router.get("/", (req, res) => {
  var file = fs.readFileSync(__dirname + "/../public/html/index.html");
  res.send(file.toString());
});

module.exports = router;
