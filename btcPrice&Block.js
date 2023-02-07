const express = require('express');
const app = express();
const http = require('http');
const request = require('request');

request({
    url: 'https://api.blockchain.info/stats',
    json: true
},
function(error, response, body) {
    if(error) {
        console.log('error' + error);
    }
    btcPrice = body.market_price_usd;
    btcBlock = body.blocks_size;
    console.log('btc Price : ' + btcPrice);
    console.log('btc Block : ' + btcBlock);
})

app.get('/', function (req, res) {
    res.send('BTC go to the moon: ' + btcPrice);
})

app.get('/block', function (req, res) {
   // res.send('current block: ' + btcBlock);
   res.sendfile("index.html");
})

app.listen(3000, function() {
    console.log('work');
})
