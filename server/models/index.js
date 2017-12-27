var db = require('../db');

module.exports = {
  messages: {
    get: function (callback) {
      db.query('SELECT * FROM messages', function(error, data) {
        console.log('Hi from models');
        if (error) {
          console.log(error);
        } else {
          callback(data);
        }
      });
    }, // a function which produces all the messages
    post: function (request, callback) {
      console.log('HELLO FROM POST');
      db.query('INSERT INTO rooms (RoomName, Room_ID) VALUES (request.roomname, (SELECT Room_ID FROM rooms WHERE rooms.RoomName = request.roomname)); INSERT INTO users (Username, User_ID) VALUES (request.username, (SELECT User_ID FROM users WHERE users.Username = request.username)); INSERT INTO messages (`MessageText`, `UserID`, `RoomID`) VALUES (' + request.message + ', (SELECT User_ID FROM users WHERE users.Username = request.username), (SELECT Room_ID FROM rooms WHERE rooms.RoomName = request.roomname)' + ')', request, function(error, data) {
        // INSERT INTO rooms (RoomName) VALUES ('request.roomname');
        // INSERT INTO users (Username) VALUES ('request.username');
        if (error) {
          console.log(error);
        } else {
          callback(data);
        }
      });
    } // a function which can be used to insert a message into the database
  },

  users: {
    // Ditto as above.
    get: function (callback) {
      db.query('SELECT messages.id, messages.text, messages.roomname FROM messages LEFT OUTER JOIN users ON (messages.userid = users.id)', function(error, data) {
        if (error) {
          console.log('error', error);
        }
        callback(data);
      });
    },
    post: function (request, callback) {
      db.query('INSERT INTO users (username) VALUES (?)', request, function(error, data) {
        if (error) {
          console.log('error', error);
        }
        callback(data);
      });
    }
  }
};

