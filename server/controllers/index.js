// controllers should interact with the models and respond to the client with a response
let {save} = require('../models');
const helper = require('../helpers');
const axios = require('axios');

module.exports = {
  savePoster: (req, res) => (
    save(req.body)
    .then((doc) => res.send(doc))
    .catch((err) => {
      console.log(err)
      res.sendStatus(500)
    }
    )
  ),
  getImage: (req, res) => (
    axios.get(helper.image)
    .then(({data}) => res.send(data))
    .catch((err) => {
      console.log(err)
      res.sendStatus(500)
    })
  ),
  getText: (req, res) => (
    axios.get(helper.text)
    .then(({data}) => res.send(data))
    .catch((err) => {
      console.log(err)
      res.sendStatus(500)})
  )
}