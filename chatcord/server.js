const path = require("path");
const http = require("http");
const express = require("express");
const socketio = require("socket.io");
const formatMessage = require("./utils/messages");
const {
  userJoin,
  getCurrentUser,
  userLeave,
  getRoomUsers,
} = require("./utils/users");

const app = express();
const server = http.createServer(app);
const io = socketio(server);

const botname = "Chat bot";

//Set static folder
app.use(express.static(path.join(__dirname, "public")));

// Run when client connects
io.on("connection", (socket) => {
  // console.log("New Websocket connection..." + socket.id);
  socket.on("joinRoom", ({ username, room }) => {
    const user = userJoin(socket.id, username, room);

    socket.join(user.room);

    //Welcome current user
    socket.emit("message", formatMessage(botname, "Welcome to Chatcord!"));

    //Broadcast when a user connects
    socket.broadcast
      .to(user.room)
      .emit(
        "message",
        formatMessage(botname, `${user.username} has joined the chat`)
      );

    //Listen for chatMessage
    socket.on("chatMessage", (msg) => {
      const id = socket.id;
      // console.log(id);
      // const user = getCurrentUser(id);
      // console.log(user);
      io.to(user.room).emit("message", formatMessage(user.username, msg));
    });

    // Runs when client disconnects
    socket.on("disconnect", () => {
      io.to(user.room).emit(
        "message",
        formatMessage(botname, `${user.username} has left the chat`)
      );
    });

    //sending room and users info
    io.to(user.room).emit("roomUsers", {
      room: user.room,
      users: getRoomUsers(user.room),
    });
  });
});

const port = 3000 || process.env.PORT;

server.listen(port, () => console.log(`server running on port ${port}`));

// socket.emit()   --> this is to emit msg to a single client.
// socket.broadcase.emit() ---> this is to emit to all the clients except the sender.
// io.emit() ---> this is to emit to all in general.
