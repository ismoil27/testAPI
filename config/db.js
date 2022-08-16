const mysql = require("mysql");
const dotenv = require("dotenv");

dotenv.config({ path: "../env" });

const db = mysql.createConnection({
  host: "119.196.91.155",
  port: "43306",
  user: "root",
  password: "xpavm007",
  database: "newdb",
});

db.connect((error) => {
  if (error) {
    console.log(error);
  } else {
    console.log("Successfully connected to database...");
  }
});

module.exports = db;
