var express = require('express');
var router = express.Router();
const request = require('request');
const https = require('https');
function newRequest(){ request('https://api.sleeper.app/v1/players/nfl/trending/add?limit=5', { json: true }, (err, res, body) => {
  if (err) { return console.log(err); }
return body;
})};
var joshTeList = [['1989',1], ['2499',1], ['2872',1], ['1978',1], ['2451',2], ['2354',2], ['1658',2], ['2906',3], ['2361',3], ['2322',3], ['2370',2], ['3251',3], ['2896',3], ['1740',3], ['2889',3], ['Ian Thomas',4],['2430',4], ['2112',4], ['3307',4], ['2197',4],['Blake Jarwin',4], ['2490',4],['Chris Herndon IV',4],['Jace Sternberger',4], ['890',4], ['Irv Smith Jr.',4],['1799',4],['Dawson Knox',4], ['2448',5],
  ['1747',5],
  ['2446',5],
  ['2973',5],
  ['2464',5],
  ['1984',5]
]
var brandonTeList =  [
    ['1989',1],
 [ '2499',1],
  ['2872',1],
 [ '1978',1],
 ['2322',3],
 [ '2354',2],
  ['2451',2],
  ['2370',2],
  ['1658',2],
  ['1740',3],
  ['2361',3],
 [ '2906',3],
 [ '2896',3],
['Blake Jarwin',4],
  ['3307',4],
 [ '2490',4],
  ['3251',3],
  ['2889',3],
  ['2430',4],
 [ '2112',4],
['Ian Thomas',4],
['Chris Herndon IV',4],
[  '2446',5],
  ['890',4],
['Irv Smith Jr.',4],
 [ '1799',4],
['Dawson Knox',4],
 [ '2448',5],
 [ '1747',5],
['Jace Sternberger',4],
[  '2973',5],
 [ '2464',5],
 [ '1984',5]
]
var te = require('../public/lists/te.json');
var wr = require('../public/lists/wr.json');
var rb = require('../public/lists/rb.json');
var qb = require('../public/lists/qb.json');
//var df = require('../public/lists/df.json');

/* GET home page. */
router.get('/', function(req, res, next) {
  https.get('https://fantasyfootballcalculator.com/api/v1/adp/standard?teams=12&year=2020', (resp) => {
    let data = '';

    // A chunk of data has been received.
    resp.on('data', (chunk) => {
      data += chunk;
    });

    // The whole response has been received. Print out the result.
    resp.on('end', () => {
      request('https://api.sleeper.app/v1/players/nfl', { json: true }, (err, response, body) => {
        if (err) { return console.log(err); }
        else{
          res.render('index',{'te':te ,'wr':wr,'rb':rb,'qb':qb, 'adp':JSON.stringify(data),
            'jsonData': body,'title':'Draft Rank','joshWrList':joshTeList, 'brandonWrList':brandonTeList})
        }
      })    });

  }).on("error", (err) => {
    console.log("Error: " + err.message);
  });

});

module.exports = router;
