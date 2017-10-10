'use strict';

const faker = require('faker');
const expect = require('expect');
const superagent = require('superagent');

require('dotenv').config();

const server = require('../lib/server.js');
const clearDB = require('../lib/clear-db.js');

const API_URL = process.env.API_URL;
let tempList;


describe('testing /api/lists', () => {
  before(server.start);
  after(server.stop);
  afterEach(clearDb);

  describe('testing POST /api/lists', () => {
    let data = {title: faker.name.title()}
    it('should respond with the new list', () => {
      return superagent.post(`${API_URL}/api/lists`)
      .send(data)
      .then( res => {
        expect(res.status).toEqual(200);
        expect(res.body.title).toEqual(data.title);
        expect(res.body.tasks).toEqual([]);
        // expect(res.body._id).toExist()
        console.log(res.body);
      })
    })
  })
})
