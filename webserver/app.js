const express = require('express');
const router = require("./routers/router");

const PORT = 8080;

const app = express();

const server = app.listen(PORT, console.log(`The server is listening at port ${PORT}...`));

app.use("/js/", express.static("public/js/"));
app.use("/css/", express.static("public/css/"));
app.use("/images/", express.static("public/images/"));

app.use(router);
