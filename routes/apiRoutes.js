const express = require("express");
const router = express.Router();

const {
  getAPIES,
  getAPI,
  setAPI,
  updateAPI,
  deleteAPI,
  redirectAPIES,
} = require("../controllers/apiController");

router.route("/").get(getAPIES).post(setAPI).get(redirectAPIES);
// router.route("/api/v1/setData").post(setBlog);
router.route("/:id").put(updateAPI).delete(deleteAPI).get(getAPI);

module.exports = router;
