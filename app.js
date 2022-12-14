const express = require("express");

const dotenv = require("dotenv");
const db = require("./config/db");

dotenv.config({ path: "./env" });

const PORT = process.env.PORT || 3000;
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use("/", require("./routes/pages"));
app.use("/auth", require("./routes/auth"));

app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});
