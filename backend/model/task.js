'use strict';

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const List = require('./list.js');

const taskSchema = Schema({
  content: {type: String, required: true},
  list: {type: Schema.Types.ObjectId, required: true, ref: 'list'}
});



module.exports = mongoose.model('task', taskSchema);
