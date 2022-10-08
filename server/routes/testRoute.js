const express = require("express"), router = express.Router();
const { test } = require("../controllers/testController.js");

// @route  GET /api/test/test/
// @desc   Returns hello world message
// @access Public
router.get("/", test);


module.exports = router;