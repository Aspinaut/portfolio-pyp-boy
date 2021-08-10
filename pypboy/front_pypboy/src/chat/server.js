// // const users = getUsers()

// // function getUsers()
// // {
// //     let users = []
// //     axios
// //     .get('http://localhost:8000/api/users/')
// //     .then(res => {
// //         users = res.data
// //     })
// //     .catch(err => console.log(err))
// //     return (users)
// // }

const server = require("http").createServer();
const io = require("socket.io")(server, {
  transports: ["websocket", "polling"]
});
const users = {};
io.on("connection", client => {
  client.on("username", username => {
    const user = {
      name: username,
      id: client.id
    };
    users[client.id] = user;
    io.emit("connected", user);
    io.emit("users", Object.values(users));
  });

  client.on("send", message => {
    io.emit("message", {
      text: message,
      date: new Date().toISOString(),
      user: users[client.id]
    });
  });

  client.on("disconnect", () => {
    const username = users[client.id];
    delete users[client.id];
    io.emit("disconnected", client.id);
  });
});
server.listen(3001);