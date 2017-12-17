

//twilio access
const accountid = 'ACd097ce2bc3899b0a81631556103f9952';
const authtoken = '5f34183461e14d623f86a250d0d5522a';
//+17738393434
//create REST client for twilio
const client = require('twilio')(accountid,authtoken);
const http = require('http');

var b = 'Sent you by';
var bb = 'BLEEDBYTES';
//var bb = te.link("http://bleedbytes.in");

/*function getUrl()
{
  return "http://bleedbytes.in";
}*/
//getting bitcoin price via coindesk API

http.get({
  host: 'api.coindesk.com',
  path: '/v1/bpi/currentprice.json'
}, (response) => {
  // get data
  let body = '';
  response.on('data', function(d) {
    body += d;
  });
  response.on('end', function() {
    // manipulate received data
    let parsed = JSON.parse(body);
    // if parseint(parsed.bpi.USD) > initial price + initialprice * x% ???
    // text btc price
    textBtcPrice(parsed.bpi.USD.rate);
  });
})

// sending text message
function textBtcPrice(price) {
  client.messages.create({
    to: '+919500370703',
    from: '+17738393434',
    body: 'Bitcoin is at $' + price + '\n' +b + bb
    }, function(err, message) {
    if(err) {
      console.error(err.message);
    }
  });
}
