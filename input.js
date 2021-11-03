const stdin = process.stdin;

// Stores the active TCP connection object.
let connection;

// setup interface to handle user input from stdin
const setupInput = (conn) => {
  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding("utf8");
  stdin.resume();

  connection = conn;

  // Handle user inputs
  const handleUserInput = function (key) {
    // your code here
    if (key === '\u0003') {
      process.exit();
    }
    if (key === 'w') {
      conn.write("Move: up");
    }
    if (key === 'a') {
      conn.write("Move: left")
    }
    if (key === 's') {
      conn.write("Move: down")
    }
    if (key === 'd') {
      conn.write("Move: right")
    }
    if (key === 'l'){
      conn.write("Say: 👽");
    }
    if (key === 'h'){
      conn.write("Say: Hiiiii!");
    }
    if (key === 'c'){
      conn.write("Say: Cool");
    }
  };

   // Event listener for stdin
   stdin.on("data", handleUserInput);

  return stdin;
};


module.exports = {setupInput};