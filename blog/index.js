const express = require('express')
const app = express()
const port = 3000

//127.0.0.1 - localHost
app.get('/', (req, res) => {
  var a = 8;
  var b = 10;
  var c = a+b;
  res.send('Hello World!')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})