var express = require('express');

var path = require('path');

var app = express();

app.use(express.static(path.join(__dirname, '../../public/')));

app.listen(3124, function () {
  console.log("Listening on 3124 ");
})