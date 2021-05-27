//models should interact with only my database
let Poster = require('../database/model');

module.exports = {
  save: (data) => {
    console.log("this is the data:", data)
     return Poster.findOneAndUpdate({}, {posterId: data.posterId, photo: data.photo}, {upsert: true})
 }
}