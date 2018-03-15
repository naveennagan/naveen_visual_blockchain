var express = require('express');

var path = require('path');

var transactions = require('./routes/transactions');

var app = express();

app.use(express.static(path.join(__dirname, '../../public/')));

app.use("/", transactions);

app.listen(3124, function () {
  console.log("Listening on 3124 ");
})