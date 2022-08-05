const express = require("express");
const mysql = require("mysql");

const port = process.env.PORT || 8080;

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/api/testing", require("./routes/apiRoutes"));
app.use("/", require("./routes/apiRoutes"));

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
