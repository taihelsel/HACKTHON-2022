const express = require("express"), router = express.Router();
const { ticket } = require("../controllers/reportController.js");

// @route  POST /api/report/ticket/
// @desc   Adds ticket to 'reported tickets' db
// @access Public
router.get("/ticket", ticket);


module.exports = router;