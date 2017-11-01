const express = require('express');
const app = express();
const jsonParser = require('body-parser').json();
const mongoose = require('mongoose');
mongoose.connect('mongodb://zeronam:password@ds227865.mlab.com:27865/heroku_z106fjzk');
const Schema = mongoose.Schema;

const userDataSchema = new Schema({
  email: {type: String, required: true},
  password: String
}, {collection: 'user_login'});

const UserData = mongoose.model('UserData', userDataSchema);
// const routes = require('./routes/route');
app.use((req,res,next) => {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Headers', 'Content-Type, X-Requested-Width');
  next();
})

// app.use('/', routes);

app.get('/', (req,res) => {
  res.send('hello everybody');
});

app.post('/signin', jsonParser, (req,res) => {
  res.send(req.body);
  console.log(req.body.email);
});
app.post('/signup',jsonParser, (req, res) => {
  const emailBody = req.body.email;
  UserData.find({email: emailBody}, (err, data) => {
    if (err) return console.error(err);
    if(data) {
      res.send({message: 'Email had used'});
    }
    res.send({message: 'Account had created', redirectTo: '/'});    
    var item = {
      email: emailBody,
      password: req.body.password
    };
    var data = new UserData(item);
    data.save();
    
  });
});


app.post('/update', function(req, res, next) {
  var email = req.body.email;

  UserData.findById(id, function(err, doc) {
    if (err) {
      console.error('error, no entry found');
    }
    doc.email = req.body.email;
    doc.password = req.body.password;
    doc.save();
  })
});

app.listen(3000, function(){console.log('Running')});
