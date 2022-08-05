// Redirect to all testing
const redirectAPIES = (req, res) => {
  res.redirect("/api/testing");
};

// Get all testing
const getAPIES = (req, res) => {
  res.status(200).json({ message: `All tests are here ` });
};

// Get single testing
const getAPI = (req, res) => {
  res.status(200).json({ message: `Got one test with id: ${req.params.id}` });
};

//  Set testing
const setAPI = (req, res) => {
  res.status(200).json({ message: `Set new test with id: ${req.params.id}` });
};

// Update testing
const updateAPI = (req, res) => {
  res.status(200).json({ message: `Update test ${req.params.id}` });
};

// Delete testing
const deleteAPI = (req, res) => {
  res.status(200).json({ message: `Delete test ${req.params.id}` });
};

module.exports = {
  getAPIES,
  getAPI,
  setAPI,
  updateAPI,
  deleteAPI,
  redirectAPIES,
};
