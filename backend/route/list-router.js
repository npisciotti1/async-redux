'use strict';

const jsonParser = require('body-parser').json();
const listRouter = module.exports = new require('express').Router();

const List = require('../model/list.js');

listRouter.post('/api/lists', jsonParser, (req, res, next) => {
  console.log('hit /api/lists');

  new List(req.body).save()
  .then(list => res.json(list))
  .catch(next)
})
