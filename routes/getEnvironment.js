var express = require('express');
var router = express.Router();
var fs = require('fs');
var dotenv = require('dotenv')
// require('dotenv').config({path:'./process1/.env'});

/* GET home page. */
router.get('/:process', function (req, res, next) {

  // const envVariables = dotenv.parse(fs.readFileSync('./' + req.params.process + '/.env'));
  // console.log(variables);
  // Object.keys(variables).forEach((key) => {
  //   if (process.env[key] === variables[key]) {
  //   delete process.env[key];
  //   }
  // });
  try {
    var envData = dotenv.parse(fs.readFileSync('./' + req.params.process + '/.env'));
    res.status(200).json({
      status: "SUCESS",
      data: envData
    });
  } catch (err) {
    res.status(400).json({
      status: 'FAILED',
      data: 'No file found with name ' + req.params.process,
    });
  }

  // // console.log(process.env);
  //   fs.readFile('./' + req.params.process + '/.env', function (err, data) {
  //     if (err) {
  //       res.status(400).json({
  //           status : 'No File Found with name ' + req.params.process,
  //       });
  //     } else {
  //       var envData = dotenv.parse(fs.readFileSync('./' + req.params.process + '/.env'))
  //       console.log(data);


  //     }
  //   });
});

module.exports = router;
