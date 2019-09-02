var express = require('express');
var router = express.Router();
var path = require('path');
var fs = require('fs');
var xlsx = require('node-xlsx');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});
router.post('/download/excel', (req, res, next) => {
  var currFile = path.join(process.cwd(), 'aeests/sensitivewords.xlsx');
  var buffer = xlsx.build(xlsx.parse(currFile));
  res.setHeader('Content-Type', 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet'); 
  res.setHeader("Content-Disposition", "attachment; filename=sensitive.xlsx");  //不能使用中文
  res.writeHead(200);

  res.end(buffer);
})

module.exports = router;
