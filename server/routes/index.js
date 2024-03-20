const express = require("express");
const router = express.Router();
const path = require("path");

//connects server to our client folder
router.use(express.static(path.join(__dirname, "../../client/dist")));

//all other routes to be handled inside index.html
router.get("/*", (req, res) => {
  res.sendFile(path.join(__dirname, "../../client/dist/index.html"));
});

module.exports = router;
