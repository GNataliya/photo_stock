const express = require('express');
const axios = require('axios');
const multer = require('multer');
const upload = multer();
const router = express.Router();



/* GET home page. */
router.get('/', (req, res) => {
  res.render('main', {title: 'mySite' });
});





module.exports = router;
