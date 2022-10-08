const express = require("express"), router = express.Router();
const { upvote, downvote } = require("../controllers/voteController.js");

// @route  PUT /vote/upvote/:ticketId
// @desc   Upvote a ticket
// @access Public
router.put("/upvote/:ticketId", upvote);

// @route  PUT /vote/downvote/:ticketId
// @desc   Downvote a ticket
// @access Public
router.put("/upvote/:ticketId", downvote);

module.exports = router;