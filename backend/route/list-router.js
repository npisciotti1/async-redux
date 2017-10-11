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

listRouter.get('/api/lists/:id', (req, res, next) => {
  console.log(' hit /api/lists/:id');

  List.findById(req.params.id)
  .populate('tasks')
  .then(list => res.json(list))
  .catch(next)
})
