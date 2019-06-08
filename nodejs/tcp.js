const net = require("net");

let resp;

const server = net.createServer((socket) => {
  console.log("A client connected!");
  
  socket.on("connect", () => {
    while (true) {
      socket.write("US_" + Math.floor(Math.random() * 4931) + "_" + Math.floor(Math.random() * 4931) + "_" + Math.floor(Math.random() * 4931) + "\n");
    }
  });

  socket.on("data", (data) => {
    socket.write("US_" + Math.floor(Math.random() * 4931) + "_" + Math.floor(Math.random() * 4931) + "_" + Math.floor(Math.random() * 4931) + "\n");
  });

  socket.on("end", () => {
    console.log("Client lost connection!");
  });
});

server.listen(1337, "127.0.0.1");
