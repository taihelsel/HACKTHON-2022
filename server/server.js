//imports
require("dotenv").config()
const express = require("express");
const path = require("path");
const session = require("express-session");
const app = express();

//config
const port = 3000;
//middleware
app.use(express.json({ limit: "50mb" }));
app.use(express.urlencoded({ limit: "50mb", extended: true, parameterLimit: 50000 }));

app.use(express.static(path.resolve(__dirname, "..", "client", "build")));
//server logging
app.use(require("morgan")("dev"));

app.use(session({
    secret: "very secret very safe",
    resave: false,
    saveUninitialized: false,
}));

const API_BASE = "/api";
//routes
app.use(`${API_BASE}/tickets`, require("./routes/ticketsRoute"));
app.use(`${API_BASE}/vote`, require("./routes/voteRoute"));
//sending build
app.get("*", (req, res) => {
    res.sendFile(path.resolve(__dirname, "..", "client", "build", "index.html"));
});
//setting port & starting server
const server = app.listen(port, () => {
    console.log("Server started on port", port);
});
module.exports = server;