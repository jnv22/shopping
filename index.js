var express = require('express');
var app = express();

app.get('/', function(rep, res) {
  res.send("HELLO world!")
})

app.listen(3000, function() {
  console.log('listening on port 3000')
})
