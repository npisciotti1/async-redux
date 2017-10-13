'use strict';

const faker = require('faker');
const mockList = require('./mock-list.js');
const Task = require('../../model/task.js');

const mockTask = module.exports = {};

mockTask.createOne = () => {
  let result = {};
  mockList.createOne()
  .then( list => {
    result.list = list;
    new Task({
      content: faker.random.words(3),
      listID: list._id.toString()
    })
    .save()
  })
  .then(task => {
    result.task = task;
    return result;
  })
}

mockTask.createMany = (n) => {

}
