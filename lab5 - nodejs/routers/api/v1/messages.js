const express = require('express')
const router = express.Router();
const messagesController = require('../../../controller/api/v1/messages')

router.get("/", messagesController.getMessages);


router.post('/', (req, res) => {
    res.send("POST messages");
});

router.put('/:id', (req, res) => {
    res.send("PUT messages");
});

router.delete('/:id', (req, res) => {
    res.send("DELETE messages" + req.params.id);
});


module.exports = router;