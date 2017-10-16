'use strict';

const expect = require('expect');
const superagent = require('superagent');

const server = require('../lib/server.js');

const mockList = require('./lib/mock-list.js');
const mockTask = require('./lib/mock-task.js');

const API_URL = process.env.API_URL;
