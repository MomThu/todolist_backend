const mongoose = require('mongoose');

// Connect to mongodb atlas
const url = 'mongodb+srv://user1:thumomm10@sotatest.k47vs.mongodb.net/myFirstDatabase?retryWrites=true&w=majority';
const connect = mongoose.connect(url);

connect.then((db) => {
  console.log("Connected correctly to server");
  
}, (err) => { console.log(err); });

module.exports = connect;