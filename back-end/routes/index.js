var express = require('express');
var router = express.Router();
const db = require('../bin/db')

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.post('/setup', async (req,res,next)=>{
  const { name, budget } = req.body
  const insertQuery = `
    INSERT INTO accounts (name, budget)
      VALUES
    ($1,$2)
  `
  try{
  const inserted = await db.one(insertQuery,[name,budget]);
  } catch(error){
    console.log(error)
  }
  res.json(req.body)
})

module.exports = router;
