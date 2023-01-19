const express = require("express");
const uniqid = require("uniqid");
const app = express();
const socketIO = require("socket.io");

const server = app.listen(3001);

const io = socketIO(server, { cors: { origin: ["http://localhost:3000"] } });
const messages = [{ id: uniqid(), aiuthor: server, text: "welcome to chat" }];

io.on("connect", (socket) => {
  console.log("user connected");
  socket.on("disconect", () => {
    console.log("user disconnected");
  });
});
