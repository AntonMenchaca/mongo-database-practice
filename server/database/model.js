const mongoose = require('mongoose');

let posterSchema = new mongoose.Schema({
  posterId: { type: Number, required: true, unique: true },
  photo: { type: String, required: true}
})

let Poster = mongoose.model('Poster', posterSchema);

module.exports = Poster;