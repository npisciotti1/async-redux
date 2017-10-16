'use strict';

require('dotenv').config({path: `${__dirname}/../../.env`})

const expect = require('expect');
const superagent = require('superagent');

const server = require('../lib/server.js');

const mockList = require('./lib/mock-list.js');
const mockTask = require('./lib/mock-task.js');
const clearDB = require('./lib/clear-db.js');

const API_URL = process.env.API_URL;

describe('testing /api/tasks', () => {
  before(server.start)
  after(server.stop);
  afterEach(clearDB);

  describe('POST /api/tasks', () => {
    it('should create and return a task', () => {
      mockList.createOne()
      .then(list => {
        return superagent.post(`${API_URL}/api/tasks`)
        .send({
          content: 'hello world',
          list: list._id.toString();
        })
      })
      .then(res => {
        expect(res.status).toEqual(200);
        expect(res.body.content).toEqual('hello world');
        expect(res.body).toHaveProperty('listID');
      })
    })
  })
})
