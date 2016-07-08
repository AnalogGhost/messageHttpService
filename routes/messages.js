var express = require('express');
var router = express.Router();

var knex = require('../db/knex');

/* GET home page. */
router.get('/', function(req, res, next) {
  knex('messages').then(function(data) {
    res.send(data);
  });
});

router.post('/', function(req,res,next) {
  if (!req.body.message || !req.body.message.name || !req.body.message.content) {
    res.status(400).json({ error: 'Bad Request' });
  }
  knex('messages')
    .insert({name: req.body.message.name, content:req.body.message.content})
    .then(function() {
      res.send("Message Received");
    })
    .catch(function(err) {
      next(err);
    });
})
module.exports = router;
