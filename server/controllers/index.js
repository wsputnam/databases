var models = require('../models');
var bluebird = require('bluebird');

module.exports = {
  messages: {
    get: function (req, res) {
      console.log('hi from controllers GET');
      models.messages.get(function(data) {
        res.json(data);
      });
      // res.end();
    }, // a function which handles a get request for all messages
    post: function (req, res) {
      console.log('hi from controllers POST');
      models.messages.post(req.body, function(data) {
        console.log(req.body);
        res.json(data);
      });
      // res.end();
    } // a function which handles posting a message to the database
  },
  // 'username=?willmsg=what....'
  users: {
    // Ditto as above
    get: function (req, res) {
      model.users.get(function(data) {
        res.json(data);
      });
    },
    post: function (req, res) {
      models.users.post(req, function(data) {
      });
    }
  }
};

