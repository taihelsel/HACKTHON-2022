const express = require("express"), router = express.Router();
const { upvote, downvote } = require("../controllers/voteController.js");

// @route  PUT /vote/upvote
// @desc   Upvote a ticket
// @access Public
router.put("/upvote", upvote);

// @route  PUT /vote/downvote
// @desc   Downvote a ticket
// @access Public
router.put("/downvote", downvote);

module.exports = router;