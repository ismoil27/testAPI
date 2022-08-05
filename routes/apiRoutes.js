const express = require("express");
const router = express.Router();

const {
  getAPIES,
  getAPI,
  setAPI,
  updateAPI,
  deleteAPI,
} = require("../controllers/apiController");

router.route("/").get(getAPIES).post(setAPI);
// router.route("/api/v1/setData").post(setBlog);
router.route("/:id").put(updateAPI).delete(deleteAPI).get(getAPI);

module.exports = router;
