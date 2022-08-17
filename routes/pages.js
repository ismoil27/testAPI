const express = require("express");

const router = express.Router();

router.get("/", (req, res) => {
  res.status(200).json({ msg: `Home page` });
});

router.get("/register", (req, res) => {
  res.status(200).json({ msg: `Register page` });
});

module.exports = router;
