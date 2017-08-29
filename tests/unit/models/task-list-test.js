import { moduleForModel, test } from 'ember-qunit';
import Ember from 'ember';

moduleForModel('task-list', 'Unit | Model | task list', {
  // Specify the other units that are required for this test.
  needs: ['model:task-item']
});


test('item-list relationship', function(assert) {
  let TaskList = this.store().modelFor('task-list');
  let relationship = Ember.get(TaskList, 'relationshipsByName').get('tasks');
  assert.equal(relationship.key, 'tasks', 'has relationship to tasks');
  assert.equal(relationship.kind, 'hasMany', 'belongs to list');
});
