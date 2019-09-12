var express = require('express');
var router = express.Router();
const db = require('../bin/db')

/* GET home page. */
// router.get('/', function(req, res, next) {
//   res.render('index', { title: 'Express' });
// });

router.post('/setup', async (req,res,next)=>{
  const { name, budget } = req.body
  const insertQuery = `
    INSERT INTO accounts (name, budget)
      VALUES
    ($1,$2)
    returning id , name
    `
    try{
      const inserted = await db.one(insertQuery,[name,budget]);
      console.log(inserted)
      if(inserted.id){
      res.json({
        msg: "added"
      })
      }
  } catch(error){
      res.sendStatus(400)  
      console.log(error)
  }
})




router.get('/get-accounts', async (req, res)=>{
  const { name, budget } = req.body
  const allAccount = `
    SELECT * 
    FROM accounts
    WHERE name = ${name}
    ($1)
  `
  
    try{const InfoFromDB = await db.any(allAccount,[name,budget]);
    console.log("get-accounts", InfoFromDB)
    res.json({
      msg: "you found me!"
    })} catch(error){
      console.log('get-accounts', error)
    }

})


module.exports = router;
