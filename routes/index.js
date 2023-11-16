var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/',(req, res)=> {
  res.render('home');
});

router.get('/Request_tutor',(req,res)=>{
  res.render('Request_tutor');
});

router.get('/Request_student',(req,res)=>{
  res.render('Request_student');
});

module.exports = router;
