const express = require('express');
const app = express();
const jsonParser = require('body-parser').json();

app.use((req,res,next) => {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Headers', 'Content-Type, X-Requested-Width');
  next();
})

app.get('/', (req,res) => {
  res.send('hello');
});

app.post('/signin', jsonParser, (req,res) => {
  res.send(req.body);
  console.log(req.body.email);
})

app.listen(3000);
