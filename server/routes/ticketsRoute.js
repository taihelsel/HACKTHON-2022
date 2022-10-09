const express = require("express"), router = express.Router();
const { all, page, remove, add } = require("../controllers/ticketsController.js");

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
router.delete("/remove", remove);

// @route  POST /api/tickets/add/
// @desc   Adds ticket to db
// @access Public
router.post("/add", add);


module.exports = router;