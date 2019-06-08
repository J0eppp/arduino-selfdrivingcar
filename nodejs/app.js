// const tcp = require("./tcp");

const express = require("express");


const router = require("./routers/router");


const PORT = 70;

const app = express();
const server = app.listen(PORT, console.log(`The server is listening at port ${PORT}...`));

app.set("view engine", "ejs");

app.use("/js/", express.static("public/js/"));
app.use("/css/", express.static("public/css/"));

app.use(router);
