const sys = require('sys');
const exec = require("child_process").exec;

function getPicture() {
  var resolution = {
    height: 480,
    width: 480
  }

  var command = `sudo fswebcam -r ${resolution.height}x${resolution.width} ${__dirname}/public/images/picture.jpg`;
  exec(command);
}

setInterval(getPicture, 500);
