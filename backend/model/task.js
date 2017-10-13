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

task.Schema.post('save', function(doc, next) {
  List.findById(doc.listID)
  .then( list => {
    list.tasks.push(doc._id);
    return list.save();
  })
  .then( () => next())
  .catch( () => next(new Error('failed to update List with new task id')))

})

module.exports = mongoose.model('task', taskSchema);
