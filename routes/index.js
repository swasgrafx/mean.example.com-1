var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  //console.log(req.session);
  res.render('index', { title: 'Express', name: 'Brian Schaeflein', });
  //res.send('respond with a resource');
});
/*
router.get('/auth/logout', function (req, res) {
  req.logout();
  res.redirect('/auth');
  console.log(req.session);
});
*/
module.exports = router;
