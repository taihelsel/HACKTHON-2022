module.exports.ticket = (req, res) => {
// @route  POST /api/report/ticket/
// @desc   Adds ticket to 'reported tickets' db
// @access Public
    try {
        const ticketId = req.body;
        //do report 
        console.log("Ticket",ticketId,"reported");
        return res.status(200).json({ msg:"reported ticket", error: false });
    } catch (err) {
        console.log(err);
        return res.status(400).json({ error: { msg: "Error message" } });
    }
}