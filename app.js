const express = require("express");
const { createServer } = require("http");
const { Server } = require("socket.io");

const PORT = 3000;
const app = express();
const httpServer = createServer(app);
const io = new Server(httpServer, { /* options */ });

io.on("connection", (socket) => {
  // ...
});

httpServer.listen(PORT, () => {
  console.log(`Example app listening on port ${PORT}`)
});

app.get('/', (req, res) => {
  res.send('Marvel Villianous')
});