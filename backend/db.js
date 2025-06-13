const mysql = require("mysql2/promise");
const connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "root",
  database: "compumarket",
});

connection.connect((err) => {
  if (err) throw err;
  console.log("Conectado a MySQL");
});

module.exports = connection;
