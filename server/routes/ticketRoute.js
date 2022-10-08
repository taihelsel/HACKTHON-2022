const express = require("express"), router = express.Router();
const { all, page, remove } = require("../controllers/testController.js");

// @route  GET /api/tickets/all/
// @desc   Returns all tickets
// @access Public
router.get("/all", all);


// @route  GET /api/tickets/page/:pageNumber
// @desc   Returns limited number of tickets by page.
// @access Public
router.get("/page/:pageNumber", page);

// @route  DELETE /api/tickets/remove/
// @desc   Removes ticket from db
// @access Public
router.get("/remove/", remove);


module.exports = router;