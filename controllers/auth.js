const db = require("../config/db");
const jwt = require("jsonwebtoken");

exports.register = (req, res) => {
  console.log(req.body);

  const { name, email, password, passwordConfirm } = req.body;

  db.query("SELECT * FROM users WHERE email = ?", [email], function (err, res) {
    if (err) {
      console.log(err);
    }
    if (res.length > 0) {
      return res.json({ message: "This email is already registered" });
    } else if (password !== passwordConfirm) {
      return res.json({ message: "Passwords do not match " });
    }
  });

  res.send(`Form submitted`);
};
