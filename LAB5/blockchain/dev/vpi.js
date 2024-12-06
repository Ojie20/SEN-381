const express = require('express'); 
const app = express();
const Blockchain = require('./blockchain');
const veroin = new Blockchain();

const bodyParser = require('body-parser');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

// GET /blockchain
app.get('/blockchain', function (req, res) {
    res.send('This is the blockchain endpoint.');
});

// POST /transaction
app.post('/transaction', function(req, res) {
  const blockIndex = JSON.stringify(veroin.createNewTransaction(req.body.amount,req.body.sender,req.body.recipient))
  res.json({note:`Transaction will be added in block ${blockIndex}`})
});

// GET /mine
app.get('/mine', function(req, res) {
    res.send('This is the mining endpoint.');
});

// Start the server on port 3000
app.listen(3000, function() {
    console.log('Listening on port 3000...');
});
