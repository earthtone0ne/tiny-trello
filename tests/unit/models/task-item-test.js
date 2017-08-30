import { moduleForModel, test } from 'ember-qunit';
import Ember from 'ember';

moduleForModel('task-item', 'Unit | Model | task item', {
  // Specify the other units that are required for this test.
  needs: ['model:task-list']
});

test('',function(assert) {
  let list = { title: 'Le List'};
  let task = this.subject({
    title: 'Test Title',
    description: 'Lots of words',
    list: list
  });
  assert.equal(task.get('title'), 'Test Title', 'gets task title');
})

test('list-element relationship', function(assert) {
  let TaskItem = this.store().modelFor('task-item');
  let relationship = Ember.get(TaskItem, 'relationshipsByName').get('list');
  assert.equal(relationship.key, 'list', 'has relationship to list');
  assert.equal(relationship.kind, 'belongsTo', 'belongs to list');
});
