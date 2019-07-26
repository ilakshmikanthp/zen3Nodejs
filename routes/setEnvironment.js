var express = require('express');
var router = express.Router();
var fs = require('fs');
var dotenv = require('dotenv');

/* GET users listing. */
router.post('/:process/:key/:value', function(req, res, next) {
  console.log(req.params.process);
  try {
    var envData = dotenv.parse(fs.readFileSync('./' + req.params.process + '/.env'));
     envData[req.params.key] = req.params.value;
     fs.writeFileSync('./' + req.params.process + '/.env', JSON.stringify(envData).replace(/{|}|"|/g,'').replace(/:/g,'=').replace(/,/g,'\n'));
    res.status(200).json({
      status: "SUCESS",
      data: envData
    });
  } catch (err) {
    res.status(400).json({
      status: 'FAILED',
      data: 'No file found with name ' + req.params.process + err,
    });
  }
});

module.exports = router;
