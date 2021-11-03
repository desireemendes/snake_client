const net = require("net");
const {IP, PORT} = require('./constants');

const connect = function() {
  const conn = net.createConnection({
    host: '135.23.223.133',
    port: 50542
  });

  // interpret incoming data as text
  conn.setEncoding("utf8");

  conn.on('connect', () => {
    console.log('Successfully connected to game server!');
    connection.write("Name: DES");
  });

  conn.on('data', (data) => {
    console.log(data);
  });
  
  return conn;
};

module.exports = {connect};