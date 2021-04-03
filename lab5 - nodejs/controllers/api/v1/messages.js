const getMessages = (req, res) => {
    res.json({
        status: "success",
        data: {
            message: "GETTING messages"
        }
    });
}

const getMessagesId = (req, res) => {
    let id = req.params.id;
    res.json({
        status: "success",
        data: {
            message: `GETTING messages with ID ${id}`
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

const updateMessages = (req, res) => {
    let id = req.params.id;
    res.json({
        status: "success",
        data: {
            message: `UPDATING message with ID: ${id}`
        }
    })
}


module.exports.getMessages = getMessages;
module.exports.getMessagesId = getMessagesId;
module.exports.createMessages = createMessages;
module.exports.updateMessages = updateMessages;

