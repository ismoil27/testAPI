const db = require("../configs/db.js");

// Redirect to all testing
const redirectAPIES = (req, res) => {
  res.redirect("/api/testing");
};

// Get all testing
const getAPIES = (req, res) => {
  const sqlGet = "SELECT * FROM devserverdb";
  db.query(sqlGet, (err, results) => {
    res.status(200).json(results);
  });
};

// Get single testing
const getAPI = (req, res) => {
  const { id } = req.params;
  const sqlGetSingle = "SELECT * FROM devserverdb WHERE id = ? ";
  db.query(sqlGetSingle, id, (err, results) => {
    if (err) {
      console.log(err);
    }
    res.status(200).send(results);
    console.log(results);
  });
};

//  Set testing
const setAPI = (req, res) => {
  const { imgurl, text, title } = req.body;

  const sqlInsert =
    "INSERT INTO devserverdb (imgurl, text, title) VALUES (?, ?, ?)";
  db.query(sqlInsert, [imgurl, text, title], (err, results) => {
    if (err) {
      console.log("err", err);
    }
  });
  res.status(200).json(req.body);
};

// Update testing
const updateAPI = (req, res) => {
  const { id } = req.params;
  const { imgurl, text, title } = req.body;
  const slqUpdate =
    "UPDATE devserverdb SET imgurl = ?, text = ?, title = ? WHERE id = ?";

  db.query(slqUpdate, [imgurl, text, title, id], (err, results) => {
    if (err) {
      console.log(err);
    }
  });

  res.status(200).json({ message: `Blog updated with id: ${req.params.id}` });
};

// Delete testing
const deleteAPI = (req, res) => {
  const { id } = req.params;
  const sqlDelete = "DELETE FROM devserverdb WHERE id = ?";
  db.query(sqlDelete, id, (err, results) => {
    if (err) {
      console.log("err", err);
    }
  });

  res.status(200).json({ message: `Blog deleted with id: ${req.params.id}` });
};

module.exports = {
  getAPIES,
  getAPI,
  setAPI,
  updateAPI,
  deleteAPI,
  redirectAPIES,
};
