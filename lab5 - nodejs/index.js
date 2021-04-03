const express = require('express')
const app = express()
const port = 3000
const messagesRouter = require('./routers/api/v1/messages')
const pug = require('pug');

app.set('view engine', 'pug');

app.get('/', (req, res) => {
  res.render('index',{
        title: 'Home',
        message: 'Testing API messages'
  });
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})

app.use("/api/v1/messages", messagesRouter)