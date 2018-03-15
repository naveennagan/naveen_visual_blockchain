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

var express = require('express');
var router = express.Router();

router.get("/blockchain/transactions", (req, res) => {
  res.send(transactions);
});

module.exports = router;