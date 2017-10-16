'use strict';

const jsonParser = require('body-parser');
const taskRouter = module.exports = new require('express').Router();

const Task = require('../model/task.js');

taskRouter.post('/api/tasks', jsonParser, (err, res, next) => {
  console.log('/api/tasks');

  new Task(res.body)
  .save()
  .then( task => res.json(task))
  .catch(next);
})
