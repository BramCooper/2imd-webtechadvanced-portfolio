const express = require('express')
const router = express.Router();
const messagesController = require('../../../controller/api/v1/messages')

router.get("/", messagesController.getMessages);
router.get("/:id", messagesController.getMessagesId);
router.post("/", messagesController.createMessages);
router.put("/:id", messagesController.updateMessages);

router.delete('/:id', (req, res) => {
    res.send("DELETE messages" + req.params.id);
});


module.exports = router;