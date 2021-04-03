const getMessages = (req, res) => {
    res.json({
        status: "success",
        data: {
            messages: "GETTING messages"
        }
    });
}

module.exports.getAllMessages = getAllMessages; 
