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

const createMessages = (req, res) => {
    let username = "Pikachu";
    res.json({
        status: "success",
        data: {
            message: `POSTING a new message for user ${username}`
        }
    });
}

module.exports.getMessages = getMessages;
module.exports.getMessagesId = getMessagesId;
module.exports.createMessages = createMessages;

