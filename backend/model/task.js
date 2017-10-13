'use strict';

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const List = require('./list.js');

const taskSchema = Schema({
  content: {type: String, required: true},
  listID: {type: Schema.Types.ObjectId, required: true, ref: 'list'}
});

taskSchema.pre('save', function(next) {
  List.findById(this.listID)
  .then( () => next())
  .catch( () => next(new Error('failed to create note - list does not exist')))
})

module.exports = mongoose.model('task', taskSchema);
