var express = require('express');
var router = express.Router();
var x = Math.random();

var val1="Math.atan2(x) of value "+ x + " is "+ Math.atan2(x)
var val2="Math.atanh(x) of value "+ x +" is "+ Math.atanh(x)
var val3= "Math.cbrt(x) of value "+ x + " is "+ Math.cbrt(x)

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('computation', { title:'Sai Greeshma Anumolu',value1: val1, value2:val2, value3:val3 });
});

module.exports = router;