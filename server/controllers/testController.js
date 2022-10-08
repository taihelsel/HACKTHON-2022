module.exports.test = async (req, res) => {
    try {
        return res.status(200).json({ msg:"Hello world" });
    } catch (err) {
        console.log(err);
        return res.status(400).json({ error: { msg: "Error message" } });
    }
}