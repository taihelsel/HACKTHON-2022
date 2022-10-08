module.exports.upvote = (req, res) => {
    // @route  PUT /vote/upvote/:ticketId
    // @desc   Upvote a ticket
    // @access Public
    try {
        const { ticketId } = req.params;
        //do vote logic here
        console.log("Upvote ticket", ticketId);
        return res.status(200).json({ error: false, msg: "Ticket upvoted" });
    } catch (err) {
        console.log(err);
        return res.status(400).json({ error: { msg: "Error message" } });
    }
}

module.exports.downvote = (req, res) => {
    // @route  PUT /vote/downvote/:ticketId
    // @desc   Downvote a ticket
    // @access Public
    try {
        const { ticketId } = req.params;
        //do vote logic here
        console.log("Downvote ticket", ticketId);
        return res.status(200).json({ error: false, msg: "Ticket downvoted" });
    } catch (err) {
        console.log(err);
        return res.status(400).json({ error: { msg: "Error message" } });
    }
}