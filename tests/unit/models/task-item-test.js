import { moduleForModel, test } from 'ember-qunit';
import Ember from 'ember';

moduleForModel('task-item', 'Unit | Model | task item', {
  // Specify the other units that are required for this test.
  needs: ['model:task-list']
});

let list = { title: 'Le List'};
let task = {
  title: 'Test Title',
  description: 'Lots of words',
  list: list
};


test('saves a title',function(assert) {
  let taskItem = this.subject(task);
  assert.equal(taskItem.get('title'), 'Test Title', 'gets task title');
})

test('list-element relationship', function(assert) {
  let TaskItem = this.store().modelFor('task-item');
  let relationship = Ember.get(TaskItem, 'relationshipsByName').get('list');
  assert.equal(relationship.key, 'list', 'has relationship to list');
  assert.equal(relationship.kind, 'belongsTo', 'belongs to list');
});

test('default property isDeleted', function(assert) {
  let taskItem = this.subject(task);
  assert.equal(taskItem.get('isDeleted'), false, 'task is not Deleted by default');
  Ember.run(()=> taskItem.set('isDeleted', true));
  assert.equal(taskItem.get('isDeleted'), true, 'task is not Deleted by default');

});

test('computed property isActive', function(assert) {
  let taskItem = this.subject(task);
  Ember.run(()=> taskItem.set('isDeleted', false));
  assert.equal(taskItem.get('isActive'), true, 'task is Active by default');
  Ember.run(()=> taskItem.set('isDeleted', true));
  assert.equal(taskItem.get('isDeleted'), true, 'task is Deleted ');
  assert.equal(taskItem.get('isActive'), false, 'task is not Active after delete');
});
