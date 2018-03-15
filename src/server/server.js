var express = require('express');

var path = require('path');

var app = express();

const transactions = [
  {
    id: `ch100${Date.now()}`,
    senderId: 'chennai',
    recieverId: 'hyderabad',
    amount: 100,
    date: Date.now()
  },
  {
    id: `hb100${Date.now()}`,
    senderId: 'hyderabad',
    recieverId: 'bangalore',
    amount: 100,
    date: Date.now()
  },
  {
    id: `bc100${Date.now()}`,
    senderId: 'bangalore',
    recieverId: 'chennai',
    amount: 100,
    date: Date.now()
  }
];

app.use(express.static(path.join(__dirname, '../../public/')));

app.get("/blockchain/transactions", (req, res) => {
  res.send(transactions);
});

app.listen(3124, function () {
  console.log("Listening on 3124 ");
})