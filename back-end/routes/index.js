var express = require('express');
var router = express.Router();
const db = require('../bin/db')

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.post('/setup',(req,res,next)=>{
  res.json(req.body)
})

module.exports = router;
