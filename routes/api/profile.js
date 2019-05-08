const express = require("express");
const router = express.Router();

router.get("/", (req, res) => res.send("Profile roure"));

module.exports = router;
