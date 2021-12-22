const express = require('express');
const axios = require('axios');
const multer = require('multer');
const upload = multer();
const router = express.Router();

const userCtrl = require('../controllers/user.js');
const { uploadsSingle } = require('../controllers/uploadImg.js');

/* GET home page. */
router.get('/', (req, res) => {
    res.render('user', {title: 'mySite' });
});
  
router.get('/profile', (req, res) => {
  res.render('profile', {title: 'mySite' });
});

router.post('/profile', uploadsSingle, (req,res) => {
  console.log(req.body);
  const { name, phone } = req.body;
  const { filename } = req.file;
  const image = `/imgs/${filename}`;



  res.json({status: 'ok'})
});
  
  
  
  
  module.exports = router;
  