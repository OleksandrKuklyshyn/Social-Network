const express = require("express");
const router = express.Router();

router.get("/", (req, res) => res.send("Auth roure"));

module.exports = router;
