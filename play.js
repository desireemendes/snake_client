const net = require("net");

// establishes a connection with the game server
const connect = function () {
  const conn = net.createConnection({
    host: '165.227.47.243',
    port: 50541
  });

  // interpret incoming data as text
  conn.setEncoding("utf8");
  conn.on('data', function(data) {
    console.log("connected user says:", data);
  })
  console.log("someone has connected");

  return conn;
};

console.log("Connecting ...");
connect();