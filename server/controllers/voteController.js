const admin = require("firebase-admin"), db = admin.firestore();

module.exports.upvote = async (req, res) => {
    // @route  PUT /vote/upvote
    // @desc   Upvote a ticket
    // @access Public
    try {
        const { ticketId } = req.body;
        const tickets = await db.collection("Ticket").doc(ticketId);
        await tickets.update({
            upvotes: admin.firestore.FieldValue.increment(1)
        })
        const ticket = await tickets.get()
        const data = { ticketId, ...ticket.data() }
        return res.status(200).json({ error: false, msg: "Ticket upvoted", data });
    } catch (err) {
        console.log(err);
        return res.status(400).json({ error: { msg: "Error message" } });
    }
}

module.exports.downvote = async (req, res) => {
    // @route  PUT /vote/downvote
    // @desc   Downvote a ticket
    // @access Public
    try {
        const { ticketId } = req.body;
        const tickets = await db.collection("Ticket").doc(ticketId);
        await tickets.update({
            upvotes: admin.firestore.FieldValue.increment(-1)
        })
        const ticket = await tickets.get()
        const data = { ticketId, ...ticket.data() }
        return res.status(200).json({ error: false, msg: "Ticket downvoted", data });
    } catch (err) {
        console.log(err);
        return res.status(400).json({ error: { msg: "Error message" } });
    }
}