var express = require('express');
var router = express();
const jsonParser = require('body-parser').json();
var mongoose = require('mongoose');
mongoose.connect('mongodb://zeronam:password@ds227865.mlab.com:27865/heroku_z106fjzk');
var Schema = mongoose.Schema;

var userDataSchema = new Schema({
  email: {type: String, required: true},
  password: String
}, {collection: 'user_login'});

var UserData = mongoose.model('UserData', userDataSchema);

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index');
});

router.get('/get-data', function(req, res, next) {
  UserData.find()
      .then(function(doc) {
        res.render('index', {items: doc});
      });
});

router.post('/signup', function(req, res, next) {
  var item = {
    email: req.body.email,
    password: req.body.password
  };
  console.log(item);
  var data = new UserData(item);
  data.save();

  res.redirect('/');
});

router.post('/update', function(req, res, next) {
  var email = req.body.email;

  UserData.findById(id, function(err, doc) {
    if (err) {
      console.error('error, no entry found');
    }
    doc.email = req.body.email;
    doc.password = req.body.password;
    doc.save();
  })
  res.redirect('/');
});

router.post('/delete', function(req, res, next) {
  var email = req.body.email;
  UserData.findByIdAndRemove(email).exec();
  res.redirect('/');
});

module.exports = router;
