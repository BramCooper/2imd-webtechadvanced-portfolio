const getMessages = (req, res) => {
    res.json({
        status: "success",
        data: {
            messages: "GETTING messages"
        }
    });
}

const getMessagesId = (req, res) => {
    let id = req.params.id;
    res.json({
        status: "success",
        data: {
            messages: `GETTING messages with ID ${id}`
        }
    });
}

module.exports.getMessages = getMessages;
module.exports.getMessagesId = getMessagesId;

