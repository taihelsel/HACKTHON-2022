const admin = require("firebase-admin"), db = admin.firestore();

/* eslint-disable no-unused-vars */
module.exports.all = async (req, res) => {
    // @route  GET /api/tickets/all/
    // @desc   Returns all tickets
    // @access Public
    try {
        const tickets = await db.collection("Ticket").get();
        const data = [];
        tickets.forEach(doc => {
            data.push({
                id:doc.id,
                ...doc.data(),
            })
        });
        return res.status(200).json({ data, error: false });
    } catch (err) {
        console.log(err);
        return res.status(400).json({ error: { msg: "Error message" } });
    }
}

module.exports.page = (req, res) => {
    // @route  GET /api/tickets/page/:pageNumber
    // @desc   Returns limited number of tickets by page.
    // @access Public
    try {
        const { pageNumber } = req.params;
        const pages = [
            [{
                image: "https://via.placeholder.com/350x150",
                desc: "Very real, very long desc",
                location: "777 Glades Rd, Boca Raton, FL 33431",
                score: 5190,
            },
            {
                image: "https://via.placeholder.com/350x150",
                desc: "Hmm. Very Real, yes",
                location: "777 Glades Rd, Boca Raton, FL 33431",
                score: 1095,
            }],
            [{
                image: "https://via.placeholder.com/350x150",
                desc: "Very real, very long desc",
                location: "777 Glades Rd, Boca Raton, FL 33431",
                score: 5190,
            },
            {
                image: "https://via.placeholder.com/350x150",
                desc: "Hmm. Very Real, yes",
                location: "777 Glades Rd, Boca Raton, FL 33431",
                score: 1095,
            }],
            [{
                image: "https://via.placeholder.com/350x150",
                desc: "Very real, very long desc",
                location: "777 Glades Rd, Boca Raton, FL 33431",
                score: 5190,
            },
            {
                image: "https://via.placeholder.com/350x150",
                desc: "Hmm. Very Real, yes",
                location: "777 Glades Rd, Boca Raton, FL 33431",
                score: 1095,
            }]
        ];
        const page = pageNumber - 1 <= 0 ? 0 : pageNumber;
        const data = typeof pages[page] === "undefined" ? false : page;
        return res.status(200).json({ data, error: false });
    } catch (err) {
        console.log(err);
        return res.status(400).json({ error: { msg: "Error message" } });
    }
}

module.exports.remove = (req, res) => {
    // @route  DELETE /api/tickets/remove/
    // @desc   Removes ticket from db
    // @access Public
    try {
        const { ticketId } = req.body;
        //do delete logic here
        console.log("delete ticket", ticketId);
        return res.status(200).json({ error: false, msg: "Delete successful" });
    } catch (err) {
        console.log(err);
        return res.status(400).json({ error: { msg: "Error message" } });
    }
}


module.exports.add = async (req, res) => {
    // @route  POST /api/tickets/add/
    // @desc   Adds ticket to db
    // @access Public
    try {
        const {
            imageURL,
            desc,
            coords,
        } = req.body;
        const tickets =  db.collection("Ticket");
        await tickets.doc().set({
            descriptions: desc,
            location: new admin.firestore.GeoPoint(coords.lat, coords.long),
            picture:imageURL,
            upvotes: Math.floor(Math.random() * 1500),
            reports:0,
        });
        return res.status(200).json({ error: false, msg: "Ticket created successfully" });
    } catch (err) {
        console.log(err);
        return res.status(400).json({ error: { msg: "Error message" } });
    }
}