// This is where we would make our db connection
const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/posters', {useNewUrlParser: true, useUnifiedTopology: true});

const db = mongoose.connection;

db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
  console.log('mongo is ready and connected')
});

module.export = db;