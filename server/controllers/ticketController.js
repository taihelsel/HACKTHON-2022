module.exports.all = (req, res) => {
    // @route  GET /api/tickets/all/
    // @desc   Returns all tickets
    // @access Public
    try {
        const data = [{
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
        }
        ]
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

module.exports.all = (req, res) => {
    // @route  GET /api/tickets/all/
    // @desc   Returns all tickets
    // @access Public
    try {
        const data = [{
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
        }
        ]
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
        return res.status(200).json({ error: false, msg: "Delete successful" });
    } catch (err) {
        console.log(err);
        return res.status(400).json({ error: { msg: "Error message" } });
    }
}