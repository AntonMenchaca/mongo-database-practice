// controllers should interact with the models and respond to the client with a response
let {save} = require('../models');

module.exports = {
  savePoster: (req, res) => (
    save(req.body)
    .then((doc) => res.send(doc))
    .catch((err) => {
      console.log(err)
      res.sendStatus(500)
    }
    )
  )
}